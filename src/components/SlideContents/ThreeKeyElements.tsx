import {
  SiCss3,
  SiCss3Hex,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
} from "@icons-pack/react-simple-icons";
import { FC } from "react";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";

export const ThreeKeyElements: FC = () => {
  return (
    <div className="grid place-items-center gap-16 h-full">
      <ul className="grid gap-6 grid-cols-3">
        <li>
          <Card>
            <SiHtml5 className="size-32" color={SiHtml5Hex} />
            <p className="text-3xl text-center font-bold">
              HyperText Markup Language (HTML)
            </p>
          </Card>
        </li>
        <li>
          <Card>
            <SiCss3 className="size-32" color={SiCss3Hex} />
            <p className="text-3xl text-center font-bold">
              Cascading Style Sheet (CSS)
            </p>
          </Card>
        </li>
        <li>
          <Card>
            <SiJavascript className="size-32" color={SiJavascriptHex} />
            <p className="text-3xl text-center font-bold">JavaScript (JS)</p>
          </Card>
        </li>
      </ul>
    </div>
  );
};

export const ThreeKeyElementsNotes: FC<{ active: boolean }> = ({ active }) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">3 Key elements</Text>
        <Text variant="listItem">
          The Three key elements of the Front-End are: HTML, CSS, and JS.
        </Text>
      </div>
    </Card>
  );
};
