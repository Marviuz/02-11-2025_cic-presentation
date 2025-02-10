import {
  example04,
  htmlBrickWall,
  htmlCarSkeleton,
  htmlWaitingSkeleton,
} from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import Example04 from "./04-html-example.mdx";
import { mdxComponents } from "./mdx-components";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";
import { List, ListItem } from "../List";

export const HtmlDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <div className="flex gap-4 items-center justify-center">
        <Example04 components={mdxComponents} />
        <ArrowRight className="size-20" />
        <img src={example04} className="w-1/2" />
      </div>

      <div className="flex gap-4 justify-center">
        <img src={htmlBrickWall} className="h-[33.33svh]" />
        <img src={htmlWaitingSkeleton} className="h-[33.33svh]" />
        <img src={htmlCarSkeleton} className="h-[33.33svh]" />
      </div>
    </div>
  );
};

export const HtmlDefinitionNotes: FC<{ active: boolean }> = ({ active }) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">HTML</Text>
        <div className="gap-6 grid">
          <Text variant="listItem">
            The foundation of every webpage and defines the structure of the
            content.
          </Text>
          <List className="space-y-1">
            <Text asChild variant="listItem">
              <ListItem>Person's bones</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>Car's Body</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>House's Walls</ListItem>
            </Text>
          </List>
        </div>
      </div>
    </Card>
  );
};
