import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");
import { emailRegExp, numberRegExp } from "../../../../untils/stringHelper";
import { FlexWrap } from "../../../Bookings/Globals/index.styles";
import {
  ContainerMiddle,
  ContainInput,
  DescriptionInput,
  ErrorLabel,
  Form,
  Input,
  InputUppercase,
  Label,
  LabelRadio,
  Select,
  SendButton,
  NewTitleForm,
} from "../../../Bookings/Form/Form.styles";

interface InputTypes {
  firstName: string;
  lastNamePaternal: string;
  lastNameMaternal: string;
  email: string;
  birthdate: string;
  cellphone: string;
  hearAboutUs: string;
  sexo: string;
  cancer: string;
}

export default function index({ nextRoute }: { nextRoute: string }) {
  const { register, handleSubmit, errors, control, setValue } = useForm<
    InputTypes
  >();
  const [sex, setSex] = useState("FEMALE");
  const [cancer, setCancer] = useState("no");
  const router = useRouter();

  const handleOnSubmit = async (data: InputTypes) => {
    const user = {
      firstName: data.firstName.toUpperCase().trim(),
      paternalLastName: data.lastNamePaternal.toUpperCase().trim(),
      maternalLastName: data.lastNameMaternal.toUpperCase().trim(),
      birthdate: data.birthdate,
      email: data.email.toLowerCase().trim(),
      cellphone: data.cellphone,
      hearAboutUs: data.hearAboutUs,
      extraInfo: {},
    };
    if (nextRoute === "/membresia/pago") {
      const extraM = {
        membership: {
          sex: sex,
          cancer: cancer,
        },
      };
      Object.assign(user, { extraInfo: extraM });
      localStorage.setItem("membershipUser", JSON.stringify(user));
    } else {
      const extraI = {
        insurance: {
          sex: sex,
          cancer: cancer,
        },
      };
      Object.assign(user, { extraInfo: extraI });
      localStorage.setItem("insuranceUser", JSON.stringify(user));
    }
    router.push(nextRoute);
  };

  return (
    <div className="lg: w-4/5">
      <NewTitleForm>Completa tu información</NewTitleForm>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="">
          <ContainInput>
            <Label htmlFor="firstName">Nombre(s)</Label>
            <InputUppercase
              placeholder=""
              name="firstName"
              ref={register({
                required: { value: true, message: "El nombre es necesario" },
                pattern: {
                  value: numberRegExp,
                  message: "El nombre no puede contener números",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe ser de 3 letras o mas",
                },
                validate: (value) =>
                  value
                    .trim()
                    .split(" ")
                    .every((val) => val.length > 1) ||
                  "Nombre(s) deben ser mas de una letra",
              })}
            />
            {errors.firstName && (
              <ErrorLabel>{errors.firstName.message}</ErrorLabel>
            )}
          </ContainInput>
          <div className="lg:flex lg:w-1/2">
            <ContainInput grow>
              <Label htmlFor="lastNamePaternal">Apellido Paterno</Label>
              <InputUppercase
                w_full
                placeholder=""
                name="lastNamePaternal"
                ref={register({
                  required: {
                    value: true,
                    message: "El apellido es necesario",
                  },
                  pattern: {
                    value: numberRegExp,
                    message: "El apellido no puede contener números",
                  },
                  minLength: {
                    value: 3,
                    message: "El apellido debe ser de 3 letras o mas",
                  },
                  validate: (value) =>
                    value
                      .trim()
                      .split(" ")
                      .every((val) => val.length > 1) ||
                    "Nombre(s) deben ser mas de una letra",
                })}
              />
              {errors.lastNamePaternal && (
                <ErrorLabel>{errors.lastNamePaternal.message}</ErrorLabel>
              )}
            </ContainInput>
            <div className="lg:p-2"></div>
            <ContainInput grow>
              <Label htmlFor="lastNameMaternal">Apellido Materno</Label>
              <InputUppercase
                w_full
                placeholder=""
                name="lastNameMaternal"
                ref={register({
                  required: {
                    value: true,
                    message: "El apellido es necesario",
                  },
                  pattern: {
                    value: numberRegExp,
                    message: "El apellido no puede contener números",
                  },
                  minLength: {
                    value: 3,
                    message: "El apellido debe ser de 3 letras o mas",
                  },
                  validate: (value) =>
                    value
                      .trim()
                      .split(" ")
                      .every((val) => val.length > 1) ||
                    "Nombre(s) deben ser mas de una letra",
                })}
              />
              {errors.lastNameMaternal && (
                <ErrorLabel>{errors.lastNameMaternal.message}</ErrorLabel>
              )}
            </ContainInput>
          </div>
          <div className="lg:flex lg:w-1/2">
            <ContainInput grow>
              <Label>Fecha de nacimiento</Label>
              <Input
                w_full
                style={{ textTransform: "lowercase" }}
                type="date"
                name="birthdate"
                ref={register({ required: true })}
                min="1900-01-01"
                max={moment().format("YYYY-MM-DD")}
                defaultValue="1950-01-01"
              />
              <ErrorLabel>
                {errors.birthdate ? "La fecha es incorrecta" : ""}
              </ErrorLabel>
            </ContainInput>
            <div className="lg:p-2"></div>
            <ContainInput grow>
              <Label>Sexo</Label>
              <div
                className="w-full flex justify-around items-center"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSex(e.target.value)
                }
              >
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="sexo"
                    value="FEMALE"
                    defaultChecked
                    className="form-radio text-primary"
                  />
                  <LabelRadio>Mujer</LabelRadio>
                </div>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="sexo"
                    value="MALE"
                    className="form-radio text-primary"
                  />
                  <LabelRadio>Hombre</LabelRadio>
                </div>
              </div>
            </ContainInput>
          </div>
          <ContainInput>
            <Label>Número Telefonico</Label>
            <FlexWrap>
              <ContainerMiddle>
                <Controller
                  as={
                    <PhoneInput
                      country="mx"
                      disableDropdown
                      countryCodeEditable={false}
                      inputProps={{
                        name: "cellphone",
                        required: true,
                      }}
                      inputClass="phone-form lg:w-1/2 w-full"
                    />
                  }
                  name="cellphone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true, minLength: 12, maxLength: 12 }}
                />
                <ErrorLabel>
                  {errors.cellphone ? "Número no valido" : ""}
                </ErrorLabel>
              </ContainerMiddle>
              <ContainerMiddle>
                <div className="lg:w-2/3">
                  <DescriptionInput>
                    El número de celular será el medio por el cual tu doctora
                    EVA se pondrá en contacto contigo, por lo que debes
                    asegurarte de que sea correcto.
                  </DescriptionInput>
                </div>
              </ContainerMiddle>
            </FlexWrap>
          </ContainInput>
          <ContainInput>
            <Label>Correo electrónico</Label>
            <FlexWrap>
              <ContainerMiddle>
                <Input
                  w_full
                  style={{ textTransform: "lowercase" }}
                  type="email"
                  name="email"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  maxLength={320}
                  ref={register({
                    required: {
                      value: true,
                      message: "El correo es necesario",
                    },
                    pattern: {
                      value: emailRegExp,
                      message:
                        "El correo no puede contener caracteres especiales",
                    },
                    minLength: {
                      value: 3,
                      message: "El correo debe ser de 3 letras o mas",
                    },
                    maxLength: {
                      value: 320,
                      message: "El correo debe ser de menos de 320 letras",
                    },
                  })}
                />
                <ErrorLabel>
                  {errors.email && (
                    <ErrorLabel>{errors.email.message}</ErrorLabel>
                  )}
                </ErrorLabel>
              </ContainerMiddle>
              <ContainerMiddle>
                <div className="lg:w-2/3">
                  <DescriptionInput>
                    Te enviaremos un email de confirmación y este será el medio
                    por el cual se entreguen tus resultados.
                  </DescriptionInput>
                </div>
              </ContainerMiddle>
            </FlexWrap>
          </ContainInput>
          <ContainInput>
            <Label>
              He sido diagnosticada(o) previamente con algún tipo de cáncer.
            </Label>
            <div className="lg:w-1/4">
              <div
                className="w-full flex justify-around items-center -ml-4 pt-2"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCancer(e.target.value)
                }
              >
                <div>
                  <input
                    type="radio"
                    id="no"
                    name="cancer"
                    value="no"
                    defaultChecked
                    className="form-radio text-primary"
                  />
                  <LabelRadio>No</LabelRadio>
                </div>
                <div>
                  <input
                    type="radio"
                    id="si"
                    name="cancer"
                    value="si"
                    className="form-radio text-primary"
                  />
                  <LabelRadio>Si</LabelRadio>
                </div>
              </div>
            </div>
          </ContainInput>
          <ContainInput>
            <Label>¿Cómo te enteraste de nosotros?</Label>
            <Select
              placeholder="Selecciona una opción"
              ref={register({
                required: {
                  value: true,
                  message: "Es necesario seleccionar una opción",
                },
              })}
              name="hearAboutUs"
            >
              <option value="">Selecciona una opción</option>
              <option value="SOCIAL_MEDIA">Redes sociales</option>
              <option value="FRIENDS_AND_FAMILY">Amigos o familiares</option>
              <option value="IN_SITU">Los vi en la plaza</option>
              <option value="MEDIA_OR_PRESS">
                Medios de comunicación o prensa
              </option>
              <option value="OTHER">Otro</option>
            </Select>
            {errors.hearAboutUs && (
              <ErrorLabel>{errors.hearAboutUs.message}</ErrorLabel>
            )}
          </ContainInput>
          <SendButton type="submit">Continuar</SendButton>
        </div>
      </Form>
    </div>
  );
}
