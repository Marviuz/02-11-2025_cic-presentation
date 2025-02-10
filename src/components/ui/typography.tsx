import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithRef, FC } from "react";

const textVariants = cva("text-pretty", {
  variants: {
    variant: {
      title: "text-3xl font-bold",
      listItem: "text-2xl",
    },
  },
});

type TextProps = ComponentPropsWithRef<"p"> &
  VariantProps<typeof textVariants> & { asChild?: boolean };

export const Text: FC<TextProps> = ({
  asChild = false,
  variant,
  className,
  ...props
}) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp className={cn(textVariants({ variant, className }))} {...props} />
  );
};
