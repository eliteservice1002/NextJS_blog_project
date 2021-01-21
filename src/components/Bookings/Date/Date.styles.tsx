import styled from "styled-components";
export const IconLocation = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 8.60478C10.8934 8.60478 9.98808 9.51015 9.98808 10.6167C9.98808 11.7233 10.8934 12.6286 12 12.6286C12.5336 12.6286 13.0453 12.4167 13.4227 12.0394C13.8 11.662 14.0119 11.1503 14.0119 10.6167C14.0119 10.0831 13.8 9.57137 13.4227 9.19406C13.0453 8.81675 12.5336 8.60478 12 8.60478ZM12 3.57495C15.2895 3.57495 19.0418 6.04963 19.0418 10.7676C19.0418 13.7654 16.8991 16.9241 12.6136 20.2136C12.2515 20.4953 11.7485 20.4953 11.3864 20.2136C7.10096 16.9141 4.95825 13.7654 4.95825 10.7676C4.95825 6.04963 8.7105 3.57495 12 3.57495Z"
      fill="#EE8D8B"
    />
  </svg>
);

export const WrapSection = styled.div.attrs(() => ({
  className: "lg:flex lg:px-sl px-4 py-32",
}))``;
export const MonthName = styled.span`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 130%;
  color: #716360;
  background: #fff;
  position: relative;
  top: -12px;
  padding: 0px 4px;
  text-transform: capitalize;
`;

export const Wrap = styled.div.attrs(() => ({
  className: "lg:flex w-full",
}))`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 16px;
`;
export const WrapName = styled.div.attrs(() => ({
  className: "flex items-center pt-6",
}))``;

export const OneThird = styled.div.attrs(() => ({
  className: " w-full lg:w-1/3",
}))`
  padding: 50px;
`;
export const ImgCab = styled.img.attrs(() => ({
  className: "h-20 w-20",
  src: `${require("../../../assets/images/cabina.jpg")}`,
}))``;

export const TitleCenter = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #716360;
  opacity: 0.4;
  padding-top: 20px;
`;
export const NameCity = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #716360;
  text-transform: capitalize;
`;
export const NameCenter = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #716360;
  flex: none;
  order: 1;
  align-self: center;
  margin: 8px 0px;
  text-transform: capitalize;
`;

export const AddressCenter = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #716360;
  flex: none;
  order: 1;
  align-self: center;
  font-feature-settings: "salt";
`;

export const FullAddressCenter = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #716360;
  flex: none;
  order: 1;
  align-self: center;
  padding-top: 10px;
  font-feature-settings: "salt";
`;

export const LocationButton = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ee8d8b;
  flex: none;
  order: 2;
  align-self: flex-start;
  text-decoration: underline;
  letter-spacing: 0.025em;
`;
export const Separator = styled.hr`
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex: none;
  order: 1;
  align-self: flex-start;
  margin: 20px 0px;
`;
export const Description = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #716360;
  flex: none;
  order: 0;
  align-self: center;
  opacity: 0.7;
  font-feature-settings: "salt";
`;
export const TitleCalendar = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #716360;
  margin-bottom: 50px;
`;
export const TitleTime = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #716360;
  margin-bottom: 10px;
`;
export const DescriptionTime = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #716360;
  opacity: 0.7;
`;
export const Hour = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ee8d8b;
`;

export const ButtonTime = styled.button`
  border: 1px solid #ee8d8b;
  border-radius: 4px;
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 10px;
`;

export const WrapTimes = styled.div`
  max-height: 490px;
  overflow-y: scroll;
  padding-top: 15px;
`;

export const ButtonSelected = styled.button.attrs(() => ({
  className: "rounded-lite bg-brownDark text-white",
}))`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 15px;
`;
export const ButtonConfirm = styled.button.attrs(() => ({
  className: "rounded-lite bg-primary text-white",
}))`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 15px 0px;
  margin-bottom: 15px;
`;
