import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) return res.status(500).json({ error });
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const { title, description } = req.body;
    const file = req.file; // Uploaded media file

    // Upload media to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("media")
      .upload(`projects/${file.name}`, file);

    if (uploadError) return res.status(500).json({ error: uploadError });

    // Insert project metadata into Supabase database
    const { data, error } = await supabase.from("projects").insert([
      { title, description, mediaUrl: uploadData.path, mediaType: file.mimetype },
    ]);

    if (error) return res.status(500).json({ error });
    return res.status(201).json(data);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const { data, error } = await supabase.from("projects").delete().eq("id", id);
    if (error) return res.status(500).json({ error });
    return res.status(200).json({ message: "Deleted successfully" });
  }
}
