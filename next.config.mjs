import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // markdown plugins here
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
