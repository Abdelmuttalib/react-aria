import React, { useEffect, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import copy from "copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { useLayoutEffect } from "react";
import { highlight } from "@/lib/highlight-code";
import { Skeleton } from "./ui/skeleton";

export function CodeBlock({
  initial,
  code,
}: {
  initial?: JSX.Element;
  code: string;
}) {
  const [nodes, setNodes] = useState(initial);

  const [copied, setCopied] = useState(false);

  const codeString = code ? code : extractTextFromChildren("  dsdfdsf");

  // Convert children to string if it is an array
  // const codeString = code ? code : extractTextFromChildren(nodes);

  const handleCopy = () => {
    copy(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  useLayoutEffect(() => {
    void highlight(code).then(setNodes);
  }, []);

  useEffect(() => {
    if (!nodes) return;
    console.log("CodeBlock mounted", nodes, extractTextFromChildren(nodes));
    return () => {
      console.log("CodeBlock unmounted");
    };
  }, [nodes]);

  return (
    <div className="relative max-h-96 overflow-auto">
      {nodes ?? (
        <div className="w-full h-full space-y-2 py-3 px-4">
          {[1, 2].map((i) => (
            <>
              <Skeleton key={1 + i} className="w-[30%] h-5 rounded-sm" />
              <Skeleton key={2 + i} className="w-[50%] h-5 rounded-sm" />
              <Skeleton key={3 + i} className="w-[40%] h-5 rounded-sm" />
              <Skeleton key={4 + i} className="w-[70%] h-5 rounded-sm" />
              <Skeleton key={5 + i} className="w-[80%] h-5 rounded-sm" />
              <Skeleton key={6 + i} className="w-[30%] h-5 rounded-sm" />
            </>
          ))}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 bg-accent-hover rounded transition-transform duration-300 ease-in-out"
      >
        {copied ? (
          <CheckIcon className="w-4 h-4" />
        ) : (
          <CopyIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}

const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (
    React.isValidElement(children) &&
    children.props &&
    children.props.children
  ) {
    return extractTextFromChildren(children.props.children);
  }

  return "";
};

interface CodeBlockProps {
  children?: React.ReactNode; // children can be a React node
  className?: string; // className for language
  code?: string; // code for the code block
}

export function CodeBlock2({ children, className, code }: CodeBlockProps) {
  console.log(children);

  const [copied, setCopied] = useState(false);
  const language = className ? className.replace(/language-/, "") : "";
  const theme = "a11yDark"; // Choose your preferred theme

  // Convert children to string if it is an array
  const codeString = code ? code : extractTextFromChildren(children);

  const handleCopy = () => {
    copy(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative w-full max-h-96">
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        className={cn("rounded max-h-96", className)}
      >
        {codeString}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1 bg-accent-hover rounded transition-transform duration-300 ease-in-out"
      >
        {copied ? (
          <CheckIcon className="w-[14px] h-[14px]" />
        ) : (
          <CopyIcon className="w-[14px] h-[14px]" />
        )}
      </button>
    </div>
  );
}
