import { FC } from "react";

interface IconVariantsValue {
  variants: "active" | "idle";
}

const iconVariants = {
  idle: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8187 2.51453H4.47368C3.78216 2.51453 3.21637 3.08032 3.21637 3.77184V21.3742L8.24561 16.3449H20.8187C21.5102 16.3449 22.076 15.7791 22.076 15.0876V3.77184C22.076 3.08032 21.5102 2.51453 20.8187 2.51453ZM19.5614 5.02908V13.8302H7.20201L6.46019 14.5721L5.73095 15.3013V5.02908H19.5614ZM24.5907 7.54381H27.1053C27.7968 7.54381 28.3626 8.10959 28.3626 8.80112V27.6608L23.3334 22.6315H9.50296C8.81144 22.6315 8.24565 22.0657 8.24565 21.3742V18.8596H24.5907V7.54381Z"
        fill="#8885FF"
      />
    </svg>
  ),
  active: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6433 2.51453H4.29826C3.60674 2.51453 3.04095 3.08032 3.04095 3.77184V21.3742L8.07019 16.3449H20.6433C21.3348 16.3449 21.9006 15.7791 21.9006 15.0876V3.77184C21.9006 3.08032 21.3348 2.51453 20.6433 2.51453ZM19.386 5.02908V13.8302H7.02665L6.28484 14.5721L5.5556 15.3013V5.02908H19.386ZM24.4152 7.54381H26.9298C27.6213 7.54381 28.1871 8.10959 28.1871 8.80112V27.6608L23.1579 22.6315H9.32748C8.63596 22.6315 8.07017 22.0657 8.07017 21.3742V18.8596H24.4152V7.54381Z"
        fill="white"
      />
    </svg>
  ),
};

const InboxIcon: FC<IconVariantsValue> = ({ variants }) => {
  return iconVariants[variants];
};

export default InboxIcon;
