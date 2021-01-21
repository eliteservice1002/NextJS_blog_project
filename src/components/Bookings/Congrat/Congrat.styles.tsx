import styled from "styled-components";
import React from "react";

export const Icon = styled.img`
  width: 55.01px;
  height: 51px;
  margin-right: 10px;
`;

export const CalendarIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-6"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.212 1.36857C6.212 1.19176 6.14176 1.02219 6.01673 0.897166C5.89171 0.772142 5.72214 0.701904 5.54533 0.701904C5.36852 0.701904 5.19895 0.772142 5.07393 0.897166C4.9489 1.02219 4.87866 1.19176 4.87866 1.36857V2.03524H3.54533C2.83809 2.03524 2.15981 2.31619 1.65971 2.81629C1.15961 3.31638 0.878662 3.99466 0.878662 4.7019L0.878662 6.03524H22.212V4.7019C22.212 3.99466 21.931 3.31638 21.4309 2.81629C20.9309 2.31619 20.2526 2.03524 19.5453 2.03524H18.212V1.36857C18.212 1.19176 18.1418 1.02219 18.0167 0.897166C17.8917 0.772142 17.7221 0.701904 17.5453 0.701904C17.3685 0.701904 17.1989 0.772142 17.0739 0.897166C16.9489 1.02219 16.8787 1.19176 16.8787 1.36857V2.03524H6.212V1.36857ZM0.878662 7.36857H22.212V19.3686C22.212 20.0758 21.931 20.7541 21.4309 21.2542C20.9309 21.7543 20.2526 22.0352 19.5453 22.0352H3.54533C2.83809 22.0352 2.15981 21.7543 1.65971 21.2542C1.15961 20.7541 0.878662 20.0758 0.878662 19.3686V7.36857ZM15.3507 12.5072C15.4758 12.3821 15.5462 12.2123 15.5462 12.0352C15.5462 11.8582 15.4758 11.6884 15.3507 11.5632C15.2255 11.4381 15.0557 11.3677 14.8787 11.3677C14.7016 11.3677 14.5318 11.4381 14.4067 11.5632L10.8787 15.0926L9.35066 13.5632C9.28868 13.5013 9.21509 13.4521 9.13411 13.4185C9.05312 13.385 8.96632 13.3677 8.87866 13.3677C8.791 13.3677 8.7042 13.385 8.62322 13.4185C8.54223 13.4521 8.46865 13.5013 8.40666 13.5632C8.34468 13.6252 8.29551 13.6988 8.26197 13.7798C8.22842 13.8608 8.21115 13.9476 8.21115 14.0352C8.21115 14.1229 8.22842 14.2097 8.26197 14.2907C8.29551 14.3717 8.34468 14.4453 8.40666 14.5072L10.4067 16.5072C10.4686 16.5693 10.5422 16.6186 10.6232 16.6522C10.7041 16.6858 10.791 16.7031 10.8787 16.7031C10.9664 16.7031 11.0532 16.6858 11.1342 16.6522C11.2152 16.6186 11.2887 16.5693 11.3507 16.5072L15.3507 12.5072Z"
      fill="#EE8D8B"
    />
  </svg>
);

export const TimeIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-6"
  >
    <path
      d="M10.5452 0.170288C4.74673 0.170288 0.045166 4.87185 0.045166 10.6703C0.045166 16.4687 4.74673 21.1703 10.5452 21.1703C16.3436 21.1703 21.0452 16.4687 21.0452 10.6703C21.0452 4.87185 16.3436 0.170288 10.5452 0.170288ZM14.6819 13.8976L14.0116 14.8117C13.997 14.8316 13.9786 14.8484 13.9575 14.8612C13.9364 14.874 13.913 14.8825 13.8886 14.8862C13.8642 14.8899 13.8393 14.8887 13.8154 14.8828C13.7914 14.8768 13.7689 14.8662 13.7491 14.8515L9.87251 12.025C9.84836 12.0076 9.82873 11.9847 9.81527 11.9582C9.80181 11.9317 9.79492 11.9024 9.79517 11.8726V5.42029C9.79517 5.31716 9.87954 5.23279 9.98267 5.23279H11.11C11.2131 5.23279 11.2975 5.31716 11.2975 5.42029V11.2211L14.6397 13.6375C14.7241 13.6961 14.7428 13.8133 14.6819 13.8976Z"
      fill="#EE8D8B"
    />
  </svg>
);

export const LocationIcon = () => (
  <svg
    width="19"
    height="23"
    viewBox="0 0 19 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-6"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.54538 6.87831C8.06996 6.87831 6.86281 8.08547 6.86281 9.56088C6.86281 11.0363 8.06996 12.2435 9.54538 12.2435C10.2568 12.2435 10.9392 11.9608 11.4422 11.4578C11.9453 10.9547 12.228 10.2723 12.228 9.56088C12.228 8.84942 11.9453 8.1671 11.4422 7.66402C10.9392 7.16094 10.2568 6.87831 9.54538 6.87831ZM9.54538 0.171875C13.9314 0.171875 18.9344 3.47144 18.9344 9.76208C18.9344 13.7591 16.0774 17.9708 10.3636 22.3568C9.8807 22.7323 9.21006 22.7323 8.7272 22.3568C3.01331 17.9573 0.156372 13.7591 0.156372 9.76208C0.156372 3.47144 5.15937 0.171875 9.54538 0.171875Z"
      fill="#EE8D8B"
    />
  </svg>
);

//ANCHOR Divs

export const ListItem = styled.li.attrs(() => ({
  className: "flex items-center py-2",
}))``;

export const Flex = styled.div.attrs(() => ({
  className: "flex flex-wrap w-full lg:p-10 p-3",
}))``;
export const Wrap = styled.div.attrs(() => ({
  className: "w-full ",
}))`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 16px;
`;

export const FlexMiddle = styled.div.attrs(() => ({
  className: "w-full lg:w-1/2",
}))``;

export const CardOff = styled.div.attrs(() => ({
  className: "flex flex-wrap justify-center py-10 lg:mr-12",
}))`
  background: rgba(249, 234, 229, 0.4);
  border-radius: 16px;
`;

export const WrapIconAndInfo = styled.div.attrs(() => ({
  className: "flex items-center",
}))``;

//ANCHOR Texts
export const TextCongrat = styled.p`
  font-family: Spectral;
  font-style: italic;
  font-weight: 500;
  font-size: 32px;
  line-height: 120%;
  color: #ee8d8b;
`;
export const TextName = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #716360;
  margin-bottom: 40px;
`;
export const TextInfo = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
  color: #716360;
  text-transform: capitalize;
`;
export const TextDescription = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #716360;
`;

export const IndicationTitle = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #5c2933;
`;
export const IndicationTitleHours = styled.p`
  font-family: Spectral;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #5c2933;
  margin-bottom: 20px;
`;
export const IndicationItemText = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.05em;
  color: #5c2933;
`;

export const CardOffText = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
  color: #5c2933;
`;
//ANCHOR Buttons
export const InviteButton = styled.a`
  background: #ee8d8b;
  border-radius: 4px;
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  width: 88px;
  height: 38px;
  padding: 5px 0px;
  text-align: center;
`;
export const LocationButton = styled.a`
  font-family: Spectral;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-decoration-line: underline;
  color: #ee8d8b;
`;
export const ToMyCalendarButton = styled.button`
  width: 263px;
  height: 51px;
  font-family: Spectral;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  background: #ee8d8b;
  border-radius: 4px;
  margin-top: 40px;
`;
