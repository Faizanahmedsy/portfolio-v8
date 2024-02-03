import React from "react";
import type { SVGProps } from "react";
import { NAV_ICON_SIZE } from "../style-utils";

export function FluentEmojiFlatMemo(props: SVGProps<SVGSVGElement>) {
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
          fill="#B4ACBC"
          d="M20.343 2.293A1 1 0 0 0 19.636 2H7a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9.364a1 1 0 0 0-.293-.707z"
        ></path>
        <path
          fill="#F3EEF8"
          d="M19.682 3H7a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.453z"
        ></path>
        <path
          fill="#998EA4"
          d="M9.5 12h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1m0 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zM9 18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z"
        ></path>
        <path
          fill="#CDC4D6"
          d="M26 9.453h-4.61a1.707 1.707 0 0 1-1.708-1.707V3z"
        ></path>
        <path
          fill="#FF822D"
          d="m26.766 20.172l-1.08-3.231l-2.796-2.006l-10.607 7.849l1.148 3.156l2.727 2.082z"
        ></path>
        <path
          fill="#FFCE7C"
          d="m11.106 26.655l.171.893l.836.468l4.039-.006l-3.86-5.216z"
        ></path>
        <path fill="#402A32" d="m10.687 28.018l.418-1.363l1.007 1.36z"></path>
        <path
          fill="#F92F60"
          d="M26.52 12.249a2 2 0 0 1 2.798.418l1.496 2.022a2 2 0 0 1-.418 2.797l-2.058 1.524l-2.805-2.069l-1.071-3.17z"
        ></path>
        <path
          fill="#D3D3D3"
          d="m24.462 13.772l3.876 5.238l-1.572 1.162l-3.875-5.237z"
        ></path>
      </g>
    </svg>
  );
}
