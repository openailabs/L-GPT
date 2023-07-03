import type { IconProps } from "./types";

export const List_expansion_fill = ({
  size = 16,
  className,
  style,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    style={style}
    width={size}
    height={size}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
      <path
        fill="currentColor"
        d="M4 3.5a1.5 1.5 0 1 0 0 3h7.5a1.5 1.5 0 0 0 0-3H4Zm17.312 2.326c.285-.558-.145-1.22-.831-1.279l-.368-.028l-.44-.028l-.506-.024l-.567-.016a31.753 31.753 0 0 0-.624-.006l-.59.005l-.54.015l-.707.034l-.57.04l-.158.013c-.64.057-1.008.658-.727 1.21l.155.298l.092.17l.213.382l.254.431a25.048 25.048 0 0 0 .784 1.222l.306.438l.28.383l.36.468l.1.127c.398.492 1.166.51 1.542.046l.213-.268l.252-.328l.138-.187l.298-.415l.158-.228l.33-.495c.163-.251.312-.49.446-.713l.249-.423l.21-.377l.175-.326l.073-.14Zm0 10c.285-.558-.145-1.22-.831-1.279l-.368-.029l-.44-.027l-.506-.024a30.08 30.08 0 0 0-.567-.016l-.624-.006l-.59.005l-.54.015l-.707.033l-.57.04l-.158.014c-.64.057-1.008.658-.727 1.21l.247.468l.213.382l.254.431a25.064 25.064 0 0 0 .94 1.448l.293.41l.137.185l.36.468l.1.127c.398.492 1.166.51 1.542.046l.213-.268l.252-.328l.138-.187l.298-.415l.158-.228l.33-.496c.163-.25.312-.489.446-.712l.249-.423l.21-.378l.175-.325l.073-.141ZM2.5 12A1.5 1.5 0 0 1 4 10.5h7.5a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 12ZM4 17.5a1.5 1.5 0 0 0 0 3h7.5a1.5 1.5 0 0 0 0-3H4Z"
      />
    </g>
  </svg>
);