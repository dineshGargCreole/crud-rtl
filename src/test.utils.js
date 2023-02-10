import { render as RTL } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";

// import { createMemoryHistory } from "history";

// const AllTheProviders = ({ children }) => {
//   const history = createMemoryHistory(["/", "/new"]);
//   return <BrowserRouter history={history}>{children}</BrowserRouter>;
// };

// const render = (ui, options) => {
//   return RTL(ui, { wrapper: AllTheProviders, ...options });
// };

// export * from "@testing-library/react";
// export { render };

const render = (ui, { route = "/" } = {}) => {
  // window.history.pushState({}, "Test page", route);

  return {
    user: user.setup(),
    ...RTL(ui, { wrapper: BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { render };
