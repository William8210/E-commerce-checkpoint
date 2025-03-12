//This won't be found on Redux documentation but on Youtube, must always been known, you must introduce "use client"
"use client";
import { Provider } from "react-redux";
import React from "react";
import store from "@/store";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

//import reduxprovider in layout so you can wrap the navbar and children inside the redux provider
