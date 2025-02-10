import { cssHouse, cssHuman, cssTesla, example05 } from "@/assets";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import Example05 from "./05-css-example.mdx";
import { mdxComponents } from "./mdx-components";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";
import { List, ListItem } from "../List";

export const CssDefinition: FC = () => {
  return (
    <div className="grid gap-8">
      <div className="flex gap-4 items-center justify-center">
        <div className="space-y-2">
          <Example05 components={mdxComponents} />
        </div>
        <ArrowRight className="size-20" />
        <img src={example05} className="w-1/2" />
      </div>

      <div className="flex gap-4 justify-center">
        <img src={cssHouse} className="h-[30svh]" />
        <img src={cssHuman} className="h-[30svh]" />
        <img src={cssTesla} className="h-[30svh]" />
      </div>
    </div>
  );
};

export const CssDefinitionNotes: FC<{ active: boolean }> = ({ active }) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">CSS</Text>
        <div className="gap-6 grid">
          <Text variant="listItem">
            The language that defines how the webpage looks.
          </Text>
          <List className="space-y-1">
            <Text asChild variant="listItem">
              <ListItem>Person's Skin</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>Car's Painting</ListItem>
            </Text>
            <Text asChild variant="listItem">
              <ListItem>House's Painting</ListItem>
            </Text>
          </List>
        </div>
      </div>
    </Card>
  );
};
