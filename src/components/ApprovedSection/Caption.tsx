import React from "react";

type PProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Caption = React.forwardRef<HTMLParagraphElement, PProps>(
  (props, ref) => (
    <p
      style={{
        fontFamily: "hthaptik",
        fontSize: "14px",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#c1aeac",
      }}
      ref={ref}
      {...props}
    ></p>
  ),
);
