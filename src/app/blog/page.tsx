"use client";
import React, { useState } from "react";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import Column from "@/components/core/Column";

const BlogPage = () => {
  // Predefined data
  const [videos, setVideos] = useState([
    { url: "https://www.example.com/video1.mp4" },
    { url: "https://www.example.com/video2.mp4" },
  ]);
  const [photos, setPhotos] = useState([
    { url: "https://www.example.com/photo1.jpg" },
    { url: "https://www.example.com/photo2.jpg" },
  ]);
  const [greatestProjects, setGreatestProjects] = useState([
    { title: "Project 1", description: "Description of greatest project 1" },
    { title: "Project 2", description: "Description of greatest project 2" },
  ]);
  const [upcomingProjects, setUpcomingProjects] = useState([
    { title: "Upcoming Project 1", description: "Details about upcoming project 1" },
    { title: "Upcoming Project 2", description: "Details about upcoming project 2" },
  ]);
  const [blogPosts, setBlogPosts] = useState([
    { title: "Blog Post 1", description: "Description of blog post 1", date: "2025-01-21" },
    { title: "Blog Post 2", description: "Description of blog post 2", date: "2025-01-20" },
  ]);

  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-6 py-12 pt-16">
        {/* Header */}
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            Creative Hub
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4 max-w-3xl mx-auto">
            Your one-stop destination for projects, blogs, videos, photos, and more.
          </p>
        </Column>

        {/* Greatest Projects Section */}
        <section className="mb-16">
          <Row classNames="justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
              Greatest Projects
            </h2>
          </Row>
          <Row classNames="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {greatestProjects.length > 0 ? (
              greatestProjects.map((project, index) => (
                <Column key={index} classNames="px-4 py-6 border rounded-md shadow-md">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-lg mt-2">{project.description}</p>
                </Column>
              ))
            ) : (
              <p className="text-lg text-[var(--textColorLight)] col-span-3">
                No greatest projects yet.
              </p>
            )}
          </Row>
        </section>

        {/* Upcoming Projects Section */}
        <section className="mb-16">
          <Row classNames="justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
              Upcoming Projects
            </h2>
          </Row>
          <Row classNames="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.length > 0 ? (
              upcomingProjects.map((project, index) => (
                <Column key={index} classNames="px-4 py-6 border rounded-md shadow-md">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-lg mt-2">{project.description}</p>
                </Column>
              ))
            ) : (
              <p className="text-lg text-[var(--textColorLight)] col-span-3">
                No upcoming projects yet.
              </p>
            )}
          </Row>
        </section>

        {/* Videos Section */}
        <section className="mb-16">
          <Row classNames="justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
              Videos
            </h2>
          </Row>
          <Row classNames="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <Column key={index} classNames="px-4 py-6">
                  <video src={video.url} controls className="w-full h-56 bg-black rounded-md shadow-md"></video>
                </Column>
              ))
            ) : (
              <p className="text-lg text-[var(--textColorLight)] col-span-3">
                No videos uploaded yet.
              </p>
            )}
          </Row>
        </section>

        {/* Photos Section */}
        <section className="mb-16">
          <Row classNames="justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
              Photos
            </h2>
          </Row>
          <Row classNames="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {photos.length > 0 ? (
              photos.map((photo, index) => (
                <Column key={index} classNames="px-4 py-6">
                  <img src={photo.url} alt={`Photo ${index + 1}`} className="w-full h-56 object-cover rounded-md shadow-md" />
                </Column>
              ))
            ) : (
              <p className="text-lg text-[var(--textColorLight)] col-span-3">
                No photos uploaded yet.
              </p>
            )}
          </Row>
        </section>

        {/* Blog Posts Section */}
        <section className="mb-16">
          <Row classNames="justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
              Blog Posts
            </h2>
          </Row>
          <Row classNames="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <Column key={index} classNames="px-4 py-6 border rounded-md shadow-md">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2">{post.description}</p>
                  <p className="text-sm text-[var(--textColorLight)] mt-4">Published on {post.date}</p>
                </Column>
              ))
            ) : (
              <p className="text-lg text-[var(--textColorLight)] col-span-3">
                No blog posts yet.
              </p>
            )}
          </Row>
        </section>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default BlogPage;
