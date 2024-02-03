import React from "react";
import type { SVGProps } from "react";
import { NAV_ICON_SIZE } from "../style-utils";

export function FluentEmojiFlatBriefcase(props: SVGProps<SVGSVGElement>) {
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
          fill="#eecec3"
          d="M2 15h28v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
        ></path>
        <path
          fill="#835d4e"
          d="M11.1 9H4a2 2 0 0 0-2 2v4a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4v-4a2 2 0 0 0-2-2h-7.1a5.002 5.002 0 0 0-9.8 0m2.07 0a3.001 3.001 0 0 1 5.66 0z"
        ></path>
        <path
          fill="#927035"
          d="m13 19l3-1l3 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"
        ></path>
        <path
          fill="#d79147"
          d="M13 18a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h-6z"
        ></path>
      </g>
    </svg>
  );
}
