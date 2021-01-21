import React from "react";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;
type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ContentBackground = React.forwardRef<HTMLElement, HeaderProps>(
  (props, ref) => (
    <header
      style={{
        position: "relative",
        height: "600px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      ref={ref}
      {...props}
    ></header>
  ),
);

export const Content = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div
      className="flex w-full justify-center flex-wrap"
      ref={ref}
      {...props}
    ></div>
  ),
);
