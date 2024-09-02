import React from "react";
import { Link } from "@/registry/default/ui/link";

export const LinkDemo = (args: any) => (
  <Link
    {...{
      href: "https://www.imdb.com/title/tt6348138/",
      target: "_blank",
    }}
  >
    The missing link
  </Link>
);
