import {
  SiAngular,
  SiAngularHex,
  SiGatsby,
  SiGatsbyHex,
  SiJquery,
  SiJqueryHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiNuxt,
  SiNuxtHex,
  SiPreact,
  SiPreactHex,
  SiReact,
  SiReactHex,
  SiRemix,
  SiRemixHex,
  SiSolid,
  SiSolidHex,
  SiSvelte,
  SiSvelteHex,
  SiThreedotjs,
  SiThreedotjsHex,
  SiTypescript,
  SiTypescriptHex,
  SiVuedotjs,
  SiVuedotjsHex,
  SiZod,
  SiZodHex,
} from "@icons-pack/react-simple-icons";
import { FC } from "react";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";

const frameworks = [
  { Icon: SiJquery, color: SiJqueryHex, name: "JQuery" },
  { Icon: SiTypescript, color: SiTypescriptHex, name: "TypeScript" },
  { Icon: SiReact, color: SiReactHex, name: "React" },
  { Icon: SiNextdotjs, color: SiNextdotjsHex, name: "Next.js" },
  { Icon: SiVuedotjs, color: SiVuedotjsHex, name: "Vue.js" },
  { Icon: SiNuxt, color: SiNuxtHex, name: "Nuxt.js" },
  { Icon: SiSvelte, color: SiSvelteHex, name: "Svelte" },
  { Icon: SiAngular, color: SiAngularHex, name: "Angular" },
  { Icon: SiPreact, color: SiPreactHex, name: "Preact" },
  { Icon: SiRemix, color: SiRemixHex, name: "Remix" },
  { Icon: SiGatsby, color: SiGatsbyHex, name: "Gatsby" },
  { Icon: SiSolid, color: SiSolidHex, name: "Solid.js" },
  { Icon: SiZod, color: SiZodHex, name: "Zod" },
  { Icon: SiThreedotjs, color: SiThreedotjsHex, name: "Three.js" },
];

export const JavaScriptLibrariesFrameworks: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {frameworks.map(({ Icon, name, color }, key) => (
          <Card key={key}>
            <div className="text-center grid gap-2">
              <div className="p-4 bg-primary rounded-lg">
                <Icon className="size-32" color={color} />
              </div>
              <Text variant="listItem">{name}</Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const JavaScriptLibrariesFrameworksNotes: FC<{ active: boolean }> = ({
  active,
}) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">JavaScript Libraries & Frameworks</Text>
        <div className="gap-6 grid">
          <Text variant="listItem">
            Just like CSS, writing plain JavaScript can be powerful but
            sometimes inefficient for large-scale projects. JavaScript libraries
            and frameworks provide reusable components, structure, and
            performance optimizations.
          </Text>
        </div>
      </div>
    </Card>
  );
};
