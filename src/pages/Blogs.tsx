import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


export const Blogs = () => {
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    // Fetch the .md file from the public folder
    fetch("/Posts/Post_Figma.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => {
        setPostContent(text);
      })
      .catch((error) => {
        console.error("Failed to load blog post:", error);
      });
  }, []); // The empty array ensures this runs only once

  return (
    // <section className="h-dvh px-6 mx-auto flex justify-center items-center">
    //   <div className="flex flex-col justify-center items-center gap-10 text">
    <section className="text-gray-500 dark:text-gray-200 max-w-6xl mx-auto gap-4 p-2.5 list-disc">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1({ children }) {
            return (
              <h1 className="text-bold text-3xl/relaxed font-montserrat text-center">
                {children}
              </h1>
            );
          },
          h2({ children }) {
            return (
              <h2 className="text-bold text-2xl/relaxed font-montserrat">
                {children}
              </h2>
            );
          },
          h4({ children }) {
            return (
              <h4 className="text-xl/relaxed font-montserrat inline mr-4 text-left">
                {children}
              </h4>
            );
          },
          p({ children }) {
            return (
              <p className="font-normal text-base font-firaSans">{children}</p>
            );
          },
          ul({ children }) {
            return <ul className="list-inside list-disc my-4">{children}</ul>;
          },
        }}
        children={postContent ? postContent : "Loading..."}
      ></Markdown>
    </section>
  );
};
