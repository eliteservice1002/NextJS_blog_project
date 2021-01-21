import React from "react";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
type UlProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;
type LiProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export const MenuWrap = React.forwardRef<HTMLUListElement, UlProps>(
  (props, ref) => (
    <ul
      className="lg:flex h-full items-center header_nav_menu"
      ref={ref}
      {...props}
    ></ul>
  ),
);

export const MenuWrapMobile = React.forwardRef<HTMLUListElement, UlProps>(
  (props, ref) => (
    <ul className="lg:hidden h-full py-4 px-4" ref={ref} {...props}></ul>
  ),
);

export const MenuLink = React.forwardRef<HTMLLIElement, LiProps>(
  (props, ref) => (
    <li
      style={{
        fontFamily: "hthaptik",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.05em",
        fontFeatureSettings: '"ss04" on',
        color: "#ffffff",
      }}
      className="font-haptik lg:mr-6 pb-6 lg:pb-0"
      ref={ref}
      {...props}
    ></li>
  ),
);

export const IconMenuWrap = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => <div className="lg:hidden" ref={ref} {...props}></div>,
);
