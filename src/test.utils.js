import { render as RTL } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

const AllTheProviders = ({ children }) => {
  const history = createMemoryHistory(["/", "/new"]);
  return <BrowserRouter history={history}>{children}</BrowserRouter>;
};

const render = (ui, options) => {
  return RTL(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { render };
