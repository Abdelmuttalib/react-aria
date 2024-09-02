import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { cn } from "./lib/utils";
import { typographyVariants } from "./components/ui/typography";
import { CodeBlock, CodeBlock2 } from "./components/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        className={cn(
          typographyVariants({
            variant: "xl/semibold",
          })
        )}
      >
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p
        className={cn(
          typographyVariants({
            variant: "base/regular",
          }),
          "text-foreground-light"
        )}
      >
        {children}
      </p>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    pre: (props) => <CodeBlock2 {...props} />,
    ...components,
  };
}
