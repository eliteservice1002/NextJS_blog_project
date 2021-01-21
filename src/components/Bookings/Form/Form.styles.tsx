import styled from "styled-components";
import React from "react";
import { device } from "../../../untils/sizes";

interface InputProps {
  readonly w_full?: boolean;
}
interface GrowProps {
  readonly grow?: boolean;
}

export const CalendarIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.00024 1.07495C4.00024 0.942343 3.94757 0.815166 3.8538 0.721398C3.76003 0.62763 3.63285 0.574951 3.50024 0.574951C3.36764 0.574951 3.24046 0.62763 3.14669 0.721398C3.05292 0.815166 3.00024 0.942343 3.00024 1.07495V1.57495H2.00024C1.46981 1.57495 0.961103 1.78566 0.586031 2.16074C0.210958 2.53581 0.000244141 3.04452 0.000244141 3.57495L0.000244141 4.57495H16.0002V3.57495C16.0002 3.04452 15.7895 2.53581 15.4145 2.16074C15.0394 1.78566 14.5307 1.57495 14.0002 1.57495H13.0002V1.07495C13.0002 0.942343 12.9476 0.815166 12.8538 0.721398C12.76 0.62763 12.6329 0.574951 12.5002 0.574951C12.3676 0.574951 12.2405 0.62763 12.1467 0.721398C12.0529 0.815166 12.0002 0.942343 12.0002 1.07495V1.57495H4.00024V1.07495ZM0.000244141 5.57495H16.0002V14.575C16.0002 15.1054 15.7895 15.6141 15.4145 15.9892C15.0394 16.3642 14.5307 16.575 14.0002 16.575H2.00024C1.46981 16.575 0.961103 16.3642 0.586031 15.9892C0.210958 15.6141 0.000244141 15.1054 0.000244141 14.575V5.57495ZM10.8542 9.42895C10.9481 9.33506 11.0009 9.20773 11.0009 9.07495C11.0009 8.94218 10.9481 8.81484 10.8542 8.72095C10.7604 8.62706 10.633 8.57432 10.5002 8.57432C10.3675 8.57432 10.2401 8.62706 10.1462 8.72095L7.50024 11.368L6.35424 10.221C6.30776 10.1745 6.25257 10.1376 6.19183 10.1124C6.13109 10.0873 6.06599 10.0743 6.00024 10.0743C5.9345 10.0743 5.8694 10.0873 5.80866 10.1124C5.74792 10.1376 5.69273 10.1745 5.64624 10.221C5.59976 10.2674 5.56288 10.3226 5.53772 10.3834C5.51256 10.4441 5.49961 10.5092 5.49961 10.575C5.49961 10.6407 5.51256 10.7058 5.53772 10.7665C5.56288 10.8273 5.59976 10.8825 5.64624 10.929L7.14624 12.429C7.19269 12.4755 7.24787 12.5125 7.30861 12.5377C7.36936 12.5629 7.43448 12.5758 7.50024 12.5758C7.56601 12.5758 7.63113 12.5629 7.69188 12.5377C7.75262 12.5125 7.8078 12.4755 7.85424 12.429L10.8542 9.42895Z"
      fill="#EE8D8B"
    />
  </svg>
);

export const TimeIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0.574951C3.65117 0.574951 0.125 4.10112 0.125 8.44995C0.125 12.7988 3.65117 16.325 8 16.325C12.3488 16.325 15.875 12.7988 15.875 8.44995C15.875 4.10112 12.3488 0.574951 8 0.574951ZM11.1025 10.8705L10.5998 11.556C10.5889 11.5709 10.5751 11.5836 10.5593 11.5931C10.5434 11.6027 10.5259 11.6091 10.5076 11.6119C10.4893 11.6146 10.4706 11.6138 10.4527 11.6093C10.4347 11.6049 10.4178 11.5969 10.4029 11.5859L7.49551 9.46597C7.4774 9.45296 7.46267 9.43579 7.45258 9.41591C7.44248 9.39602 7.43731 9.37401 7.4375 9.35171V4.51245C7.4375 4.43511 7.50078 4.37183 7.57812 4.37183H8.42363C8.50098 4.37183 8.56426 4.43511 8.56426 4.51245V8.86304L11.0709 10.6753C11.1342 10.7193 11.1482 10.8072 11.1025 10.8705Z"
      fill="#EE8D8B"
    />
  </svg>
);

export const DateDescription = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  color: #ee8d8b;
  margin-left: 4px;
`;

export const WrapDatesInfo = styled.div.attrs(() => ({
  className: "flex py-1 items-center",
}))``;

export const TwoThird = styled.div.attrs(() => ({
  className: "lg:w-2/3",
}))`
  padding: 50px;
`;

export const Input = styled.input.attrs<InputProps>(({ w_full }) => ({
  className: `${w_full ? "w-full" : "lg:w-1/2 w-full"} rounded-lite`,
}))<InputProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  align-items: center;
  color: #716360;

  ::placeholder {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    align-items: center;
    color: #7163609c;
  }
`;

export const InputUppercase = styled.input.attrs<InputProps>(({ w_full }) => ({
  className: `${w_full ? "w-full" : "lg:w-1/2 w-full"} rounded-lite uppercase`,
}))<InputProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  align-items: center;
  color: #716360;

  ::placeholder {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    align-items: center;
    color: #7163609c;
  }
`;
export const Select = styled.select.attrs<InputProps>(({ w_full }) => ({
  className: `${w_full ? "w-full" : "lg:w-1/2 w-full"} rounded-lite`,
}))<InputProps>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  align-items: center;
  color: #716360;

  ::placeholder {
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    align-items: center;
    color: #7163609c;
  }

  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 95% 50%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const TitleForm = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #716360;
`;
export const Label = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #716360;
  margin-bottom: 8px;
`;
export const SendButton = styled.button`
  background: #ee8d8b;
  border-radius: 4px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding: 16px 18px;
`;
export const DescriptionInput = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #716360;
  margin: 10px 0px;
  @media ${device.laptop} {
    margin: 0px 20px;
  }
`;

export const ContainerMiddle = styled.div.attrs<InputProps>(({ w_full }) => ({
  className: `${w_full ? "w-full" : "lg:w-1/2 w-full"}`,
}))<InputProps>``;

export const Form = styled.form.attrs(() => ({
  className: "w-full py-8",
}))``;
export const ErrorLabel = styled.div.attrs(() => ({
  className: "text-red-600 text-sm pl-2 py-1",
}))``;
export const ContainInput = styled.div.attrs<GrowProps>(({ grow }) => ({
  className: `${grow && "w-full flex-grow"} pb-4 pl-1`,
}))<GrowProps>``;

export const LabelRadio = styled.label`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  align-items: center;
  color: #716360;
  padding: 10px;
`;

export const NewTitleForm = styled.div.attrs(() => ({
  className: "font-hthaptik text-1.4rem md:text-2xl font-light text-brownDark",
}))``;
