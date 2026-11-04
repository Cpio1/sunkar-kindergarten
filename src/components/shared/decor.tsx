/** Декоративные фигурки сайта. Все они скрыты от экранных дикторов. */

type DecorProps = { className?: string };

export function Sun({ className = "" }: DecorProps) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className={className}>
      <g className="anim-spin">
        {rays.map((angle) => (
          <rect key={angle} x="56.5" y="3" width="7" height="17" rx="3.5" fill="#FFD66B" transform={`rotate(${angle} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="29" fill="#FFD66B" />
    </svg>
  );
}

export function Star({ className = "", fill = "#FFD66B" }: DecorProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        className="anim-twinkle"
        fill={fill}
        d="M20 3c1.5 9 4 12 16 15.5C25 21 22 25 20 37c-2-11-5-15.500-16-18.500C15.500 15.500 18.500 12 20 3Z"
      />
    </svg>
  );
}

export function Cloud({ className = "", fill = "#FFFFFF" }: DecorProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 120 64" aria-hidden="true" className={className}>
      <path
        fill={fill}
        d="M30 60C14 60 3 50 3 38c0-11 9-20 21-20 3-10 13-16 24-15 9 0 17 5 21 13 3-2 7-3 11-3 11 0 20 8 21 18 9 1 16 8 16 15s-7 14-18 14H30Z"
      />
    </svg>
  );
}

export function Leaf({ className = "", fill = "#217A60" }: DecorProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path fill={fill} d="M42 5C21 6 7 15 7 31c0 3 1 6 2 8 2-9 9-17 21-22-9 7-15 15-17 26 2 1 5 1 8 0C36 40 44 24 42 5Z" />
    </svg>
  );
}

/** Сокол: «сұңқар» по-казахски значит «сокол». Основа фирменного знака. */
export function Falcon({ className = "", fill = "#217A60" }: DecorProps & { fill?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <path
        fill={fill}
        d="M61 21l-7 1c-2-3-6-4-10-3-5 1-8 4-11 7C27 18 18 11 3 8c3 11 9 20 19 26L6 38l13 4-7 13c9-3 16-8 22-14 11 0 19-6 21-14l6-6Z"
      />
    </svg>
  );
}

/** Пунктирная траектория полёта сокола. */
export function FlightPath({ className = "", d, viewBox }: DecorProps & { d: string; viewBox: string }) {
  return (
    <svg viewBox={viewBox} fill="none" aria-hidden="true" className={className}>
      <path d={d} stroke="#217A60" strokeOpacity="0.42" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 11" />
    </svg>
  );
}

/** Волна-переход между разделами разного цвета. */
export function Wave({ className = "", fill, flip = false }: DecorProps & { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-8 w-full lg:h-14 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path fill={fill} d="M0 70V36c170-36 330-42 520-18 200 25 350 42 540 18 150-19 270-22 380-8v42H0Z" />
    </svg>
  );
}
