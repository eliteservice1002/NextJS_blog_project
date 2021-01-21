import styled from "styled-components";
import React, { ReactNode } from "react";

export class Layout extends React.Component {
  static Left = ({ children }: { children: ReactNode }) => {
    return <div className="lg:w-3/12 lg:pl-4 px-3 lg:px-0">{children}</div>;
  };

  static Right = ({ children }: { children: ReactNode }) => (
    <div className="lg:w-9/12 py-4 lg:py-0 px-3 lg:px-0">{children}</div>
  );

  render() {
    return <div className="lg:flex  lg:pl-sl lg:mt-20">{this.props.children}</div>;
  }
}

export const CardContent = styled.li.attrs(() => ({
  className: "flex lg:max-w-5xl",
}))`
  overflow-y: scroll;
  padding:0 0 80px 32px;
  overflow-x: visible;
`;

export const Card = styled.div.attrs(() => ({
  className: "bg-gray-200 mr-3 ",
}))`
  min-width: 211px;
  height: 388px;
  border-radius: 16px;
  box-shadow: 0 1.875rem 3.75rem -1.875rem rgba(0, 0, 0, 0.5);
`;
export const TitleCard = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 6px;
`;
export const SubTitleCard = styled.p`
  font-family: Spectral;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  color: #ffffff;
`;

export class CardLayout extends React.Component {
  static Top = ({ children }: { children: ReactNode }) => {
    return <div className="h-60p">{children}</div>;
  };

  static Bottom = ({
    children,
    color,
  }: {
    children: ReactNode;
    color: string;
  }) => (
    <div
      className={`h-40p p-4`}
      style={{
        borderBottomLeftRadius: "16px",
        borderBottomRightRadius: "16px",
        background: color,
      }}
    >
      {children}
    </div>
  );

  render() {
    return <Card>{this.props.children}</Card>;
  }
}
