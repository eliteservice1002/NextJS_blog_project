import styled from "styled-components";
import React, { ReactNode } from "react";

export class LayoutSections extends React.Component {
  static Left = ({ children }: { children: ReactNode }) => {
    return (
      <div className="lg:w-8/12 lg:pl-4 px-3 lg:px-0  md:320 lg:h-auto">
        {children}
      </div>
    );
  };

  static Right = ({ children }: { children: ReactNode }) => (
    <div className="lg:w-4/12 py-4 lg:pl-0 px-4 lg:pr-10">{children}</div>
  );

  render() {
    return (
      <div className="lg:flex flex-row-reverse lg:px-sl">
        {this.props.children}
      </div>
    );
  }
}

export const Flex = styled.div.attrs(() => ({
  className: "flex",
}))``;
export const Space = styled.span`
  height: 18px;
`;
