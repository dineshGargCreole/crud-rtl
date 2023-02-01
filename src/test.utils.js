import { render as RTL } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const render = (component, option = {}) => {
  return RTL(<BrowserRouter>{component}</BrowserRouter>, option);
};

export * from "@testing-library/react";
export { render };
