import React from "react";
import { BrowserRouter } from "react-router-dom";

function ProviderRouter({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default ProviderRouter;
