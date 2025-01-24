import Image from "next/image";
import Link from "next/link";

const easypaisaNumber = "03163212502"; // Your EasyPaisa number
const whatsappNumber = "+923458750296"; // Your new WhatsApp number
const easypaisaMessage = `Pay to EasyPaisa Number: ${easypaisaNumber}`; // Custom message

function EasyPaisaButton() {
  return (
    <Link
      className="app__filled_btn min-w-[10rem] gap-2"
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(easypaisaMessage)}`} // Linking to WhatsApp message for payment instructions
      target="_blank"
    >
      <Image
  src="/images/31.png"
  alt="EasyPaisa Logo Not Found"
  width={120}
  height={100}
  className="h-[1.5rem] w-auto aspect-square"
/>


      <div className="flex flex-col">
        <p className="font-bold text-base/none">Pay via EasyPaisa</p>
        <p
          className="text-xs text-[var(--textColor80)]"
          style={{ textTransform: "initial" }}
        >
          Secure Payment to: {easypaisaNumber}
        </p>
      </div>
    </Link>
  );
}

export default EasyPaisaButton;
