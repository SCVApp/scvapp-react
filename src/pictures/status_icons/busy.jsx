import * as React from "react";

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    {...props}
  >
    <title>{"icn_status_ALL"}</title>
    <path
      d="M.674 2.5A5.031 5.031 0 0 1 2.5.674 4.856 4.856 0 0 1 5 0a4.864 4.864 0 0 1 2.505.674A5.038 5.038 0 0 1 9.326 2.5 4.861 4.861 0 0 1 10 5a4.861 4.861 0 0 1-.674 2.505 5.038 5.038 0 0 1-1.821 1.821A4.864 4.864 0 0 1 5 10a4.856 4.856 0 0 1-2.5-.674A5.031 5.031 0 0 1 .674 7.505 4.861 4.861 0 0 1 0 5a4.861 4.861 0 0 1 .674-2.5Z"
      style={{
        fill: "#c4314b",
      }}
    />
  </svg>
);

export default SvgComponent;
