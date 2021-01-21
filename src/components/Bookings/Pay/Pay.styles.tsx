import styled from "styled-components";
import React from "react";
import { Separator } from "../Date/Date.styles";

interface IPayMethod {
  readonly disabled?: boolean;
  readonly selected?: boolean;
}

export const Container = styled.div.attrs(() => ({
  className: "h-full w-full flex justify-center py-32",
}))``;

export const Wrap = styled.div.attrs(() => ({
  className: "py-6 px-4 md:px-10 max-w-lg",
}))`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 16px;
  margin 0 20px;
`;

export const PayMethod = styled.div.attrs<IPayMethod>(
  ({ disabled, selected }) => ({
    className: `flex my-2 border-solid ${
      selected
        ? "border-primary border-2"
        : "border border-prevention20-lightgrey"
    } ${disabled && "pointer-events-none opacity-50 bg-gray-100 "}`,
  }),
)<IPayMethod>`
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Label = styled.label`
  min-width: 200px;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 120%;
  color: #716360;
  margin-bottom: 50px;
`;
export const Subtitle = styled.h3`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: #716360;
  margin-bottom: 20px;
  padding-top: 14px;
  padding-bottom: 8px;
`;

export const TitlePayMethod = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  margin-left: 12px;
`;
export const PayMethodSelect = ({
  name,
  setPaymethod,
  img,
  value,
  selected,
  disabled,
}: {
  name: string;
  setPaymethod: (value: string) => void;
  img?: string;
  value: string;
  selected?: boolean;
  disabled?: boolean;
}) => {
  return (
    <PayMethod disabled={disabled} selected={selected}>
      <Label className="w-full py-5 px-4 items-center justify-between">
        <div className="flex justify-center items-center">
          <input
            className="text-primary "
            checked={selected}
            name="paymethod"
            type="radio"
            value={value}
            onChange={(e) => {
              setPaymethod(e.target.value);
            }}
          />
          <TitlePayMethod
            className={selected ? "text-primary" : "text-brownDark"}
          >
            {name}
          </TitlePayMethod>
        </div>
        {img && (
          <div className="pr-4">
            <img src={img} />
          </div>
        )}
      </Label>
    </PayMethod>
  );
};

export const TotalText = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 120%;
  text-align: center;
  font-feature-settings: "ss04" on;
  color: #716360;
`;
export const AcceptText = styled.label`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #716360;
  padding-top: 0px;
  padding-bottom: 20px;
`;

export const Total = () => {
  return (
    <div>
      <Separator />
      <div className="h-12 flex items-center justify-center">
        <div className="flex flex-row w-full font-hthaptik text-xl text-brownDark font-bold">
          <div className="w-1/2">Total:</div>
          <div className="w-1/2 text-right">$400</div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export const TotalCoupon = ({ code, discount }) => {
  return (
    <div>
      <Separator />
      <div className="h-16 flex flex-col justify-around">
        <div className="flex justify-between">
          <div className="flex flex-row w-full font-hthaptik text-xl">
            <div className="w-1/2 text-brownDark">Código ({code}):</div>
            <div className="w-1/2 text-right text-primary">
              -${400 * (discount / 100)}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-row w-full font-hthaptik text-xl text-brownDark font-bold">
            <div className="w-1/2">Total:</div>
            <div className="w-1/2 text-right">
              ${400 - 400 * (discount / 100)}
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export const Accept = () => (
  <div className="flex justify-center py-3">
    <AcceptText>
      <input type="checkbox" id="cbox1" value="accept" /> Acepto términos y
      condiciones
    </AcceptText>
  </div>
);

export const ItemCardLeft = styled.li`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #716360;
`;
export const ItemCardRight = styled.li`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #716360;
  text-decoration: underline;
`;
export const TitleCard = styled.h2`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  color: #716360;
  padding: 14px 0;
`;

export const MethodDescription = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #716360;
  padding: 6px 10px;
`;

export const Card = styled.div.attrs(() => ({
  className: "w-full flex justify-center",
}))``;
export const CardContent = styled.div.attrs(() => ({
  className: "w-full py-1",
}))``;

export const WrapperInCenter = styled.div.attrs(() => ({
  className: "w-full mb-12",
}))``;

export const ButtonPayConfirm = styled.button`
  background: #ee8d8b;
  backdrop-filter: blur(40px);
  font-family: hthaptik;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  :disabled {
    background: #a0aec0;
  }
`;
