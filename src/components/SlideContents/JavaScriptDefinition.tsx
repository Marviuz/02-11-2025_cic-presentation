import { example06, jsBrain, jsCurrent, jsEngine } from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import Example06 from "./06-javascript-example.mdx";
import { mdxComponents } from "./mdx-components";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";
import { List, ListItem } from "../List";

export const JavaScriptDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <div className="flex gap-4 justify-center">
        <img src={jsCurrent} className="h-[20svh]" />
        <img src={jsBrain} className="h-[20svh]" />
        <img src={jsEngine} className="h-[20svh]" />
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

export const JavaScriptDefinitionNotes: FC<{ active: boolean }> = ({
  active,
}) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">JavaScript</Text>
        <div className="gap-6 grid">
          <Text variant="listItem">
            JavaScript is the language the powers the web. It defines how the
            webpage behaves.
          </Text>
          <List className="space-y-1">
            <Text asChild variant="listItem">
              <ListItem>Person's brain</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>Car's engine</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>House's power current(?)</ListItem>
            </Text>
          </List>
        </div>
      </div>
    </Card>
  );
};
