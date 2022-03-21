// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import { curiositySlice } from "./reducers/curiosity";
import { opportunitySlice } from "./reducers/opportunity";
import { spiritSlice } from "./reducers/spirit";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        spirits: spiritSlice.reducer,
        curiosities: curiositySlice.reducer,
        opportunities: opportunitySlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
  { route = "/" } = {}
) {
  function Wrapper({ children }) {
    window.history.pushState({}, "Test page", route);
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
