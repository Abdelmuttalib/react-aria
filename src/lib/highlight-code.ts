import { codeToHtml } from "shiki";

import { codeToHast } from "shiki/bundle/web";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";

export async function highlightCode(code: string) {
  const html = codeToHtml(code, {
    lang: "typescript",
    theme: "github-dark-default",
    transformers: [
      {
        code(node) {
          node.properties["data-line-numbers"] = "";
        },
      },
    ],
  });

  return html;
}

export async function highlight(code: string) {
  const out = await codeToHast(code, {
    lang: "tsx",
    theme: "night-owl",
  });

  return toJsxRuntime(out, {
    Fragment,
    // @ts-ignore - jsx-runtime is not typed
    jsx,
    // @ts-ignore - jsx-runtime is not typed
    jsxs,
  });
}
