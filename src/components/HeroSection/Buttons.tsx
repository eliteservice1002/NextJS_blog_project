import React from "react";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const ButtonContactHero = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => (
  <button
    className="bg-white text-primary py-md px-xl font-spectral text-16 leading-24 rounded-lite"
    ref={ref}
    {...props}
  ></button>
));

export const ButtonScheduledHero = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => (
  <button
    className="border border-primary bg-primary text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite"
    ref={ref}
    {...props}
  ></button>
));

export const ButtonScheduledHeroWhite = React.forwardRef<
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
    <div className="flex-wrap lg:hidden mt-5" ref={ref} {...props}></div>
  ),
);

export const WrapButton = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div className="w-full justify-center my-3" ref={ref} {...props}></div>
  ),
);
