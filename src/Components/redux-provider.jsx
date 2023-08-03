"use client";

import { store } from "@/lib/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
