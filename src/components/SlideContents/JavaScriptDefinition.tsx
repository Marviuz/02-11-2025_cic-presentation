import { example06 } from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { List, ListItem } from "../List";
import Example06 from "./06-javascript-example.mdx";
import { mdxComponents } from "./mdx-components";

export const JavaScriptDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <p className="text-2xl">
          JavaScript is the language the powers the web. It defines how the
          webpage behaves.
        </p>

        <div className="space-y-2">
          <p className="text-2xl font-bold">Analogy:</p>
          <List className="flex text-md space-x-4 space-y-0">
            <ListItem>Person's brain</ListItem>
            <ListItem>Car's engine</ListItem>
            <ListItem>House's power current(?)</ListItem>
          </List>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="space-y-2">
          <Example06 components={mdxComponents} />
        </div>

        <ArrowRight className="size-20" />

        <img src={example06} className="w-1/3" />
      </div>
    </div>
  );
};
