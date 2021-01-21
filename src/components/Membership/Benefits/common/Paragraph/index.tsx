import React, { ReactNode } from "react";

export default function index({ children }: { children: ReactNode }) {
  return <p className="mb-3">{children}</p>;
}
