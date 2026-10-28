import { cn } from "@/lib/utils";

export function RouteLine({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 720 220"
      fill="none"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M18 176C92 176 112 58 216 58c104 0 126 112 232 112 106 0 126-112 232-112"
        stroke={light ? "rgba(248, 244, 234, 0.18)" : "rgba(19, 27, 77, 0.14)"}
        strokeWidth="1"
        strokeDasharray="3 6"
      />
      <path
        d="M18 176C92 176 112 58 216 58c104 0 126 112 232 112 106 0 126-112 232-112"
        stroke="#5B4CFF"
        strokeWidth="1.5"
        pathLength={1}
        className="route-draw"
      />
      <circle cx="18" cy="176" r="4" fill="#06B6D4" />
      <circle cx="680" cy="58" r="4" fill={light ? "#F0F4F8" : "#0B132B"} />
      <circle cx="216" cy="58" r="3" fill={light ? "#F0F4F8" : "#0B132B"} />
      <circle cx="448" cy="170" r="3" fill={light ? "#F0F4F8" : "#0B132B"} />
    </svg>
  );
}
