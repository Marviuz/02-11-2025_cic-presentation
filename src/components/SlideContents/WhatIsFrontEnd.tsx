import { FC } from "react";
import { List, ListItem } from "../List";

export const WhatIsFrontEnd: FC = () => {
  return (
    <div className="grid gap-16">
      <List className="text-3xl">
        <ListItem>
          The front-end is everything you see and interact with on a website.
        </ListItem>
        <ListItem>
          Focuses on layout, animations, content organization, navigation and
          graphics.
        </ListItem>
      </List>

      <div className="gap-6 grid">
        <p className="text-3xl font-bold">Key Elements:</p>
        <List className="space-y-2 text-xl font-medium ">
          <ListItem>Hypertext Markup Language (HTML)</ListItem>
          <ListItem>Cascading Style Sheet (CSS)</ListItem>
          <ListItem>JavaScript (JS)</ListItem>
        </List>
      </div>
    </div>
  );
};
