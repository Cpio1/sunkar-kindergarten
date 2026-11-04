import type { ReactNode } from "react";

const shapes = {
  a: "M.52 .015C.73 -.01 .93 .1 .98 .33C1.03 .56 .95 .8 .76 .92C.58 1.03 .3 1.01 .14 .85C-.02 .69 -.03 .42 .09 .24C.2 .09 .36 .03 .52 .015Z",
  b: "M.34 .03C.53 -.03 .8 .01 .92 .19C1.04 .37 1 .63 .87 .8C.74 .97 .48 1.03 .28 .94C.08 .85 -.02 .63 .01 .42C.04 .24 .17 .08 .34 .03Z",
  c: "M.6 .02C.8 .05 .97 .22 .99 .44C1.01 .68 .88 .9 .65 .97C.42 1.04 .17 .95 .06 .74C-.05 .53 .01 .27 .19 .12C.31 .03 .46 0 .6 .02Z",
  arch: "M.5 0C.79 0 1 .2 1 .47V.93C1 .97 .97 1 .93 1H.07C.03 1 0 .97 0 .93V.47C0 .2 .21 0 .5 0Z",
} as const;

export type FrameShape = keyof typeof shapes;

/** Определения рамок. Подключаются один раз на страницу. */
export function FrameDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        {Object.entries(shapes).map(([id, d]) => (
          <clipPath key={id} id={`frame-${id}`} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        ))}
      </defs>
    </svg>
  );
}

/** Органическая SVG-рамка: содержимое обрезается по форме, а контур чуть смещён для рукотворного вида. */
export function OrganicFrame({
  shape,
  children,
  className = "",
  ringClassName = "text-sun",
  ringOffset = "translate(.022 .018) scale(.97)",
}: {
  shape: FrameShape;
  children: ReactNode;
  className?: string;
  ringClassName?: string;
  ringOffset?: string;
}) {
  return (
    <div className={`${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `url(#frame-${shape})` }}>
        {children}
      </div>
      <svg
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`pointer-events-none absolute -inset-[3%] size-[106%] overflow-visible ${ringClassName}`}
      >
        <path
          d={shapes[shape]}
          transform={ringOffset}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 9"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
