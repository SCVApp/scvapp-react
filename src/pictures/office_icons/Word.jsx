import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>{".cls-4{fill:#185abd}"}</style>
    </defs>
    <title>{"Word_24x"}</title>
    <g id="Word">
      <g id="_24" data-name={24}>
        <path
          style={{
            fill: "none",
          }}
          d="M0 0h24v24H0z"
        />
        <path
          d="M24 7V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5l9 2Z"
          style={{
            fill: "#41a5ee",
          }}
        />
        <path
          style={{
            fill: "#2b7cd3",
          }}
          d="M24 7H6v5l9.5 2 8.5-2V7z"
        />
        <path className="cls-4" d="M24 12H6v5l9 1.5 9-1.5v-5z" />
        <path
          d="M6 17h18v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5Z"
          style={{
            fill: "#103f91",
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
          className="cls-4"
          y={5}
          width={14}
          height={14}
          rx={1.17}
        />
        <path
          id="Letter"
          d="M10.16 16H8.72L7 10.48 5.28 16H3.84l-1.6-8h1.44l1.12 5.6 1.68-5.44h1.2l1.6 5.44L10.4 8h1.36Z"
          style={{
            fill: "#fff",
          }}
        />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
