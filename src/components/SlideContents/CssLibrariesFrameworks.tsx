import {
  SiAntdesign,
  SiAntdesignHex,
  SiBootstrap,
  SiBootstrapHex,
  SiBulma,
  SiBulmaHex,
  SiChakraui,
  SiChakrauiHex,
  SiMaterialdesign,
  SiMaterialdesignHex,
  SiScpfoundation,
  SiScpfoundationHex,
  SiStyledcomponents,
  SiStyledcomponentsHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiVuetify,
  SiVuetifyHex,
} from "@icons-pack/react-simple-icons";
import { FC } from "react";
import { Card } from "../ui/card";
import { Text } from "../ui/typography";

export const CssLibrariesFrameworks: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Card>
          <div className="text-center grid gap-2">
            <SiBootstrap className="size-40" color={SiBootstrapHex} />
            <Text variant="listItem">Bootstrap</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiTailwindcss className="size-40" color={SiTailwindcssHex} />
            <Text variant="listItem">Tailwind</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiMaterialdesign className="size-40" color={SiMaterialdesignHex} />
            <Text variant="listItem">Material Design</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiBulma className="size-40" color={SiBulmaHex} />
            <Text variant="listItem">Bulma</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiScpfoundation className="size-40" color={SiScpfoundationHex} />
            <Text variant="listItem">Foundation</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiChakraui className="size-40" color={SiChakrauiHex} />
            <Text variant="listItem">Chakra UI</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiAntdesign className="size-40" color={SiAntdesignHex} />
            <Text variant="listItem">Ant Design</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiStyledcomponents
              className="size-40"
              color={SiStyledcomponentsHex}
            />
            <Text variant="listItem">Styled Components</Text>
          </div>
        </Card>
        <Card>
          <div className="text-center grid gap-2">
            <SiVuetify className="size-40" color={SiVuetifyHex} />
            <Text variant="listItem">Vuetify</Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const CssLibrariesFrameworksNotes: FC<{ active: boolean }> = ({
  active,
}) => {
  return (
    <Card active={active}>
      <div className="grid gap-4">
        <Text variant="title">CSS Libraries & Frameworks</Text>
        <div className="gap-6 grid">
          <Text variant="listItem">
            Writing plain CSS gives full control, but it can be time-consuming
            and inconsistent across projects. To speed up development and ensure
            responsive, visually appealing designs, we developers use CSS
            frameworks and libraries.
          </Text>
        </div>
      </div>
    </Card>
  );
};
