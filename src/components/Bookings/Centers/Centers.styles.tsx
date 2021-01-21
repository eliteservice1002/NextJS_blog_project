import react, { ReactNode } from "react";
import styled from "styled-components";
import { device } from "../../../untils/sizes";

export const IconLocation = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.3334 13.3333C25.3334 20.1359 18.585 25.9744 16.5648 27.5698C16.2295 27.8346 15.7707 27.8346 15.4354 27.5698C13.4151 25.9744 6.66675 20.1359 6.66675 13.3333C6.66675 8.17868 10.8454 4 16.0001 4C21.1547 4 25.3334 8.17868 25.3334 13.3333Z"
      fill="white"
    />
    <ellipse cx="16" cy="13.3334" rx="4" ry="4" fill="#B1765E" />
  </svg>
);

export const IconLocationDisable = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.3334 13.3333C25.3334 20.1359 18.585 25.9744 16.5648 27.5698C16.2295 27.8346 15.7707 27.8346 15.4354 27.5698C13.4151 25.9744 6.66675 20.1359 6.66675 13.3333C6.66675 8.17868 10.8454 4 16.0001 4C21.1547 4 25.3334 8.17868 25.3334 13.3333Z"
      fill="#C1AEAC"
    />
    <ellipse cx="16" cy="13.3334" rx="4" ry="4" fill="white" />
  </svg>
);

export const CentersContain = styled.div.attrs(() => ({
  className: "lg:px-sl px-12 lg:by-20 pb-10 lg:flex",
}))``;

export const CentersTitle = styled.h3`
  padding: 50px 20px 15px 20px;
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #716360;
`;

export const CenterCityWrap = styled.div.attrs(() => ({
  className: "px-2  w-full flex justify-center py-10",
}))``;

export const CenterCity = ({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) => {
  return (
    <CenterCityWrap>
      <div
        className={`bg-local flex justify-center items-center bg-no-repeat bg-center bg-cover h-32 bordered`}
        style={{
          backgroundColor: "C6BAB7",
          backgroundImage: `${
            index < 4
              ? `url(${require("../../../assets/images/cab.jpg")})`
              : "none"
          }`,
          width: "211px",
          height: "149px",
        }}
      >
        <div>
          <p className="flex justify-center">
            {index < 4 ? <IconLocation /> : <IconLocationDisable />}
          </p>
          {index < 4 ? (
            <NameCenterActive>{children}</NameCenterActive>
          ) : (
            <NameCenterInactive>{children}</NameCenterInactive>
          )}
        </div>
      </div>
    </CenterCityWrap>
  );
};

export const NameCenterActive = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
`;
export const NameCenterInactive = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  text-align: center;
  color: #c1aeac; ;
`;

export const ButtonCity = styled.button`
  text-transform: capitalize;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0px;
  width: 211px;
  height: 49px;
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: #ee8d8b;
  border-radius: 8px;
  margin-bottom: 10px;
  &:disabled {
    color: #958582;
    opacity: 0.4;
    background: rgba(193, 174, 172, 0.2);
  }
  &:focus {
    outline: 0;
  }
`;

export const ButtonCityDisabled = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0px;
  width: 211px;
  height: 49px;
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #958582;
  opacity: 0.4;
  background: rgba(193, 174, 172, 0.2);
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const PageContent = styled.div.attrs(() => ({
  className: "pt-32 font-hthaptik",
}))``;

export const BannerContain = styled.div.attrs(() => ({
  className: "w-full lg:px-sl px-4",
}))``;

export const BannerContent = styled.div.attrs(() => ({
  className: "p-5 rounded-lg",
}))`
  background: #fff4ef;
`;

export const BannerText = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05em;
  @media ${device.laptop} {
    font-size: 16px;
  }
`;

export const Bold = styled.span`
  font-weight: 900;
`;
