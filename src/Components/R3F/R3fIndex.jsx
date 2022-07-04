import React from "react";
import MarkdownFile from "../Markdown/MarkdownFile";

const R3fIndex = ({}) => {

  return (
    <div className="flex-auto min-w-0 px-4 pt-8 pb-24 sm:px-6 xl:px-8 lg:pb-16">
      <div className="pb-6 mb-4 border-b post-header"><h1
        className="mb-4 text-5xl font-bold tracking-tighter">Introduction</h1><p
        className="text-base leading-4 text-gray-400 leading-5">Description</p>
      </div>
      <MarkdownFile/>
    </div>
  )
};

export default R3fIndex;