import { ComponentPropsWithRef, FC } from "react";

export const TechstacksIcon: FC<ComponentPropsWithRef<"svg">> = ({
  ref,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height="1em"
      viewBox="0 0 1813 1441"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M0 720.5 710.6 9.9v417.8L417.8 720.5l292.8 292.8v417.8zm1813 0-719.7 719.8v-417.9l301.9-301.9-301.9-301.9V.8z"
        fillRule="evenodd"
        style={{ color: "#22ce9d" }}
      ></path>
      <path
        d="M1266.4 674.9h-209.8l-59 451H806.3l-59-451H546.6L697 524.6h419z"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
