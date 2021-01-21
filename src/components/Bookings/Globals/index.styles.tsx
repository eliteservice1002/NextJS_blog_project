import styled from "styled-components";

export const FullWidth = styled.div`
  width:100%;
`
export const MiddleWidth = styled.div`
  width:50%;
`
export const Flex = styled.div.attrs(()=>({
  className:'flex'
}))``
export const FlexWrap = styled.div.attrs(()=>({
  className:'flex flex-wrap'
}))``

export const Bold = styled.span`
  font-weight: 900;
`;
export const SemiBold = styled.span`
  font-weight: 600;
`;
