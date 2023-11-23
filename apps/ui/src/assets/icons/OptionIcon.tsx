import { FC } from "react";

interface IconVariantsValue {
  variants: "focus" | "idle";
}

const iconVariants = {
  focus: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
        fill="#4F4F4F"
      />
    </svg>
  ),
  idle: (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.07016 12.5731C6.68712 12.5731 5.55554 13.7046 5.55554 15.0877C5.55554 16.4707 6.68712 17.6023 8.07016 17.6023C9.4532 17.6023 10.5848 16.4707 10.5848 15.0877C10.5848 13.7046 9.4532 12.5731 8.07016 12.5731ZM23.1579 12.5731C21.7748 12.5731 20.6433 13.7046 20.6433 15.0877C20.6433 16.4707 21.7748 17.6023 23.1579 17.6023C24.5409 17.6023 25.6725 16.4707 25.6725 15.0877C25.6725 13.7046 24.5409 12.5731 23.1579 12.5731ZM13.0994 15.0877C13.0994 13.7046 14.231 12.5731 15.614 12.5731C16.9971 12.5731 18.1286 13.7046 18.1286 15.0877C18.1286 16.4707 16.9971 17.6023 15.614 17.6023C14.231 17.6023 13.0994 16.4707 13.0994 15.0877Z"
        fill="white"
      />
    </svg>
  ),
};

const OptionIcon: FC<IconVariantsValue> = ({ variants }) => {
  return iconVariants[variants];
};

export default OptionIcon;
