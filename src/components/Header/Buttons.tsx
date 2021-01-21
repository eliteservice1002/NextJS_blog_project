import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ButtonContactHeader = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => (
  <button
    style={{ outline: "none !important" }}
    className="bg-primary text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite ml-3 cursor-pointer"
    ref={ref}
    {...props}
  ></button>
));

export const ButtonScheduledHeader = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => (
  <button
    style={{ outline: "none !important" }}
    className="border border-white text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite mr-3 cursor-pointer"
    ref={ref}
    {...props}
  ></button>
));

export const ButtonScheduledHeaderWhite = React.forwardRef<
  HTMLDivElement,
  DivProps
>((props, ref) => (
  <div
    style={{ outline: "none !important" }}
    className="border border-white bg-white text-primary py-md px-xl font-spectral text-16 leading-24 rounded-lite mr-3 cursor-pointer"
    ref={ref}
    {...props}
  ></div>
));

export const ContentButtons = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div
      style={{ outline: "none !important" }}
      className="flex items-center h-full mr-24"
      ref={ref}
      {...props}
    ></div>
  ),
);

export const WrapButton = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => <div className="hidden lg:block" ref={ref} {...props}></div>,
);
