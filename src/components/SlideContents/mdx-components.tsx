import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  pre: ({ className, ...props }) => (
    <pre className={cn("py-2 rounded-lg shadow-md", className)} {...props} />
  ),
};
