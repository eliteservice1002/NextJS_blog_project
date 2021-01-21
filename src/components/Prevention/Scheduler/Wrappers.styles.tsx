import styled from "styled-components";

export const Label = styled.div.attrs({
  className:
    "hidden lg:block tracking-wide text-white text-s font-bold mb-2 font-haptik",
})``;

export const Select = styled.select.attrs({
  className:
    "hidden lg:block tracking-wide text-white text-xs font-bold mb-2 font-haptik",
})``;

export const CenteredWrap = styled.div.attrs({
  className: "flex w-full justify-center lg:relative lg:-mt-16 mb-8 lg:px-8",
})``;

export const AroundWrap = styled.div.attrs({
  className:
    "flex flex-col w-full py-10 h-320 lg:pt-4 lg:pb-8 lg:px-8 lg:flex-row lg:h-32 lg:w-4/5 justify-around items-center bg-primary",
})``;

export const IconWrap = styled.div.attrs({
  className:
    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
})``;

export const SelectT = styled.select.attrs({
  className:
    "w-64 bg-transparent block appearance-none w-ful border border-white-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-white-500 lg:w-48",
})`
  -webkit-appearance: none;
`;
