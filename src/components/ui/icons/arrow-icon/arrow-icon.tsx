interface IArrowIcon {
  width?: string;
  height?: string;
  color?: string;
}

export default function ArrowIcon({ 
  width = '20', 
  height = '20', 
  color = 'var(--accent-color)' 
}: IArrowIcon) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.125 10.2158H16.875"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.25 4.59082L16.875 10.2158L11.25 15.8408"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
