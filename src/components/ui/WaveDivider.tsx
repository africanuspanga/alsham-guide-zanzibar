interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

export default function WaveDivider({
  topColor = "#ffffff",
  bottomColor = "#ffffff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      style={{ backgroundColor: topColor }}
      className={flip ? "rotate-180" : ""}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-16 md:h-20"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
