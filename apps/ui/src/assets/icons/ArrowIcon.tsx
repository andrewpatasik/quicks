import { FC } from "react";

interface IconVariantsValue {
  variants: "left" | "down";
}

const iconVariants = {
  left: (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.9883 13.8304H10.6868L17.7152 6.80204L15.9298 5.02924L5.87134 15.0877L15.9298 25.1462L17.7026 23.3734L10.6868 16.345H25.9883V13.8304Z"
        fill="#F2F2F2"
      />
    </svg>
  ),
  down: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.15 15.09L23.377 13.317L16.3475 20.3338V5.03003H13.8325V20.3338L6.81568 13.3044L5.03003 15.09L15.09 25.15L25.15 15.09Z"
        fill="#F2F2F2"
      />
    </svg>
  ),
};

const ArrowIcon: FC<IconVariantsValue> = ({ variants }) => {
  return iconVariants[variants];
};

export default ArrowIcon;
