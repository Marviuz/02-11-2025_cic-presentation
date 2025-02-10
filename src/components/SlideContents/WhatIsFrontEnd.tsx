import { whatIsFrontEnd } from "@/assets";
import { FC } from "react";
import { List, ListItem } from "../List";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";

export const WhatIsFrontEnd: FC = () => {
  return (
    <div className="grid place-items-center gap-16 h-full">
      <img src={whatIsFrontEnd} className="h-[75svh] w-auto" />
    </div>
  );
};

export const WhatIsFrontEndNotes: FC<{ active: boolean }> = ({ active }) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">What is front-end</Text>
        <List className="space-y-1">
          <Text asChild variant="listItem">
            <ListItem>
              The front-end is everything you see and interact with on a
              website.
            </ListItem>
          </Text>
          <Text asChild variant="listItem">
            <ListItem>
              Focuses on layout, animations, content organization, navigation
              and graphics.
            </ListItem>
          </Text>
        </List>
      </div>
    </Card>
  );
};
