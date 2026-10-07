"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Reads the clock only in the browser so the page can be prerendered statically.
export default function Year() {
  const year = useSyncExternalStore(subscribe, () => new Date().getFullYear(), () => null);
  return <>{year}</>;
}
