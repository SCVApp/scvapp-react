import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {
          ".cls-1{opacity:.1}.cls-3{fill:#5059c9}.cls-4{fill:#7b83eb}.cls-5{opacity:.5}"
        }
      </style>
    </defs>
    <title>{"Teams_24x"}</title>
    <g id="Teams">
      <path
        className="cls-1"
        d="M8 10.12v7.38a5.4 5.4 0 0 0 .61 2.5h5A1.5 1.5 0 0 0 15 18.65V9H9.12A1.12 1.12 0 0 0 8 10.12ZM13.83 6h-3A3.29 3.29 0 0 0 14 8.31a3.33 3.33 0 0 0 1-.17v-1A1.18 1.18 0 0 0 13.83 6Z"
      />
      <path
        style={{
          fill: "none",
        }}
        d="M0 0h24v24H0z"
      />
      <path
        className="cls-3"
        d="M22.87 9h-5l-1.39 1.13v5.59a3.76 3.76 0 0 0 7.51 0v-5.59A1.12 1.12 0 0 0 22.87 9Z"
      />
      <circle id="Head" className="cls-3" cx={20.5} cy={5.5} r={2.5} />
      <path
        className="cls-4"
        d="M9.12 9h8.76A1.12 1.12 0 0 1 19 10.12v7.38a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 8 17.5v-7.38A1.12 1.12 0 0 1 9.12 9Z"
      />
      <circle
        id="Head-2"
        data-name="Head"
        className="cls-4"
        cx={14}
        cy={5}
        r={3.31}
      />
      <path
        className="cls-5"
        d="M8 10.12v7.38a5.4 5.4 0 0 0 .61 2.5h5A1.5 1.5 0 0 0 15 18.65V9H9.12A1.12 1.12 0 0 0 8 10.12ZM13.83 6h-3A3.29 3.29 0 0 0 14 8.31a3.33 3.33 0 0 0 1-.17v-1A1.18 1.18 0 0 0 13.83 6Z"
      />
      <rect
        id="Back_Plate"
        data-name="Back Plate"
        y={5}
        width={14}
        height={14}
        rx={1.17}
        style={{
          fill: "#4b53bc",
        }}
      />
      <path
        d="M10.18 9.58H7.79V16H6.22V9.58h-2.4V8h6.36Z"
        style={{
          fill: "#fff",
        }}
      />
    </g>
  </svg>
);

export default SvgComponent;
