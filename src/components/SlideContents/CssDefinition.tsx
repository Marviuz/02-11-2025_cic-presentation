import { example05 } from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { List, ListItem } from "../List";
import Example05 from "./05-css-example.mdx";
import { mdxComponents } from "./mdx-components";

export const CssDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <p className="text-2xl">
        The language that defines how the webpage looks.
      </p>

      <div className="space-y-2">
        <p className="text-2xl font-bold">Analogy:</p>
        <List className="text-md flex space-y-0 space-x-4">
          <ListItem>Person's Skin</ListItem>
          <ListItem>Car's Painting</ListItem>
          <ListItem>House's Painting</ListItem>
        </List>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="space-y-2">
          <Example05 components={mdxComponents} />
        </div>

        <ArrowRight className="size-20" />

        <img src={example05} className="w-1/2" />
      </div>
    </div>
  );
};
