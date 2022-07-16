import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>{".cls-3{fill:#107c41}"}</style>
    </defs>
    <title>{"Excel_24x"}</title>
    <g id="Excel">
      <g id="_24" data-name={24}>
        <path
          d="M16 1H7a1 1 0 0 0-1 1v5l10 5 4 1.5 4-1.5V7Z"
          style={{
            fill: "#21a366",
          }}
        />
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h24v24H0z"
        />
        <path className="cls-3" d="M6 7.02h10V12H6z" />
        <path
          d="M24 2v5h-8V1h7a1 1 0 0 1 1 1Z"
          style={{
            fill: "#33c481",
          }}
        />
        <path
          d="M16 12H6v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5Z"
          style={{
            fill: "#185c37",
          }}
        />
        <path
          d="M13.83 6H6v14h7.6a1.5 1.5 0 0 0 1.4-1.35V7.17A1.18 1.18 0 0 0 13.83 6Z"
          style={{
            opacity: 0.5,
          }}
        />
        <rect
          id="Back_Plate"
          data-name="Back Plate"
          className="cls-3"
          y={5}
          width={14}
          height={14}
          rx={1.17}
        />
        <path
          d="M3.43 16 6 12 3.64 8h1.91l1.3 2.55a4.63 4.63 0 0 1 .24.54 5.77 5.77 0 0 1 .27-.56L8.76 8h1.75l-2.43 4 2.49 4H8.71l-1.5-2.8a2.14 2.14 0 0 1-.21-.37 1.54 1.54 0 0 1-.17.36L5.3 16Z"
          style={{
            fill: "#fff",
          }}
        />
        <path className="cls-3" d="M16 12h8v5h-8z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
