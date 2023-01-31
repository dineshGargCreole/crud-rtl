import { ReactElement } from "react";
import { render, renderOptions } from "@testing-library/react";
import ProviderRouter from "./providerRouter/ProviderRouter";

const customRender = (props) =>
  render(props.ui, { wrapper: ProviderRouter, ...props?.options });

export * from "@testing-library/react";
export { customRender as render };
