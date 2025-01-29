import { example04 } from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { List, ListItem } from "../List";
import Example04 from "./04-html-example.mdx";
import { mdxComponents } from "./mdx-components";

export const HtmlDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <p className="text-2xl">
        The foundation of every webpage and defines the structure of the
        content.
      </p>

      <p className="text-3xl font-bold">Analogy:</p>
      <List className="space-y-4 text-2xl">
        <ListItem>Person's bones</ListItem>
        <ListItem>Car's Body</ListItem>
        <ListItem>House's Walls</ListItem>
      </List>

      <div className="flex gap-4 items-center justify-center">
        <Example04 components={mdxComponents} />

        <ArrowRight className="size-20" />

        <img src={example04} className="w-1/2" />
      </div>
    </div>
  );
};
