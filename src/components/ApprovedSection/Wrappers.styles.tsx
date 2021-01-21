import React from "react";

import styled from "styled-components";

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface Show {
  readonly showText: string;
}

export const Wrap = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
  <div className="mt-5" ref={ref} {...props}></div>
));

export const BrandsContent = styled.div.attrs<Show>(({ showText }) => ({
  className: `w-full lg:w-auto flex flex-wrap lg:flex-no-wrap justify-center ${showText}`,
}))<Show>``;

export const BrandsWrapper = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div
      className="flex lg:w-auto mt-3 lg:mt-0 justify-center"
      ref={ref}
      {...props}
    ></div>
  ),
);

export const TextContent = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div className="py-sl flex justify-center" ref={ref} {...props}></div>
  ),
);

export const LineContent = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div className="hidden lg:block pb-sl px-20" ref={ref} {...props}></div>
  ),
);

export const BrandOnlyMobile = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => (
    <div
      className="lg:hidden flex w-full justify-center pt-4"
      ref={ref}
      {...props}
    ></div>
  ),
);
