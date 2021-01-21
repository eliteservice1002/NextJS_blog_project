import styled from "styled-components";

interface AddPadding {
  readonly padding?: string;
}

export const Label = styled.div.attrs({
  className:
    "text-brownDark font-hthaptik text-10 uppercase absolute pl-2 pt-3 pb-1 font-bold tracking-wider",
})``;

export const SelectT = styled.select.attrs({
  className:
    "bg-transparent text-brownDark font-hthaptik w-full pt-5 pb-2 pl-1 text-base font-light",
})`
  -webkit-appearance: none;
`;

export const Select = styled.select.attrs({
  className:
    "bg-transparent text-brownDark font-hthaptik w-full pt-5 pb-2 pl-2 border-darkLight border rounded border-solid text-base font-light",
})`
  -webkit-appearance: none;
`;

export const Input = styled.input.attrs<AddPadding>(({ padding }) => ({
  className: `text-brownDark font-hthaptik pt-6 pb-2 text-base font-light w-full border border-darkLight border-solid placeholder-prevention20-brownDarkLight ${
    padding ? padding : "pl-2"
  }`,
}))<AddPadding>`
  border-radius: 8px;
`;

export const IconWrap = styled.div.attrs({
  className:
    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2",
})``;

export const TextAddress = styled.div.attrs({
  className:
    "-mt-0.5 text-xs font-hthaptik text-darkbrown leading-120 font-medium",
})`
  opacity: 0.7;
`;
