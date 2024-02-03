import React from "react";
import type { SVGProps } from "react";
import { NAV_ICON_SIZE } from "../style-utils";

export function FluentEmojiFlatHouse(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={NAV_ICON_SIZE}
      height={NAV_ICON_SIZE}
      viewBox="0 0 32 32"
      {...props}
    >
      <g fill="none">
        <path
          fill="#F3C07B"
          fillRule="evenodd"
          d="M10 8.834V3.523A.528.528 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v8.646l-1 .833v16h22v-15L16.07 3.772z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#8C5543"
          d="M15.92 27.003H8.08c-.04 0-.08-.04-.08-.08v-10.53c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v10.53c-.01.04-.05.08-.09.08"
        ></path>
        <path
          fill="#402A32"
          d="M14.5 21.002a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"
        ></path>
        <path
          fill="#D3D3D3"
          d="M15.96 28.002H8c-.55 0-1-.45-1-1s.45-1 1-1h7.96c.55 0 1 .45 1 1s-.45 1-1 1"
        ></path>
        <path
          fill="#00F397"
          d="M30 29.002H2v-.09c0-1.06.85-1.91 1.91-1.91h24.18c1.05 0 1.91.85 1.91 1.91z"
        ></path>
        <path
          fill="#F8312F"
          d="m16.88 2.353l12.76 12.57c.48.47.48 1.23 0 1.69c-.47.47-1.24.47-1.72 0l-11.9-11.72l-11.94 11.76c-.47.47-1.24.47-1.72 0s-.48-1.23 0-1.7l12.8-12.6c.47-.47 1.24-.47 1.72 0"
        ></path>
        <path
          fill="#83CBFF"
          d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"
        ></path>
      </g>
    </svg>
  );
}
