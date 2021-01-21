import React, { Fragment, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");
import { Controller, useForm } from "react-hook-form";
import DayPickerInput from "react-day-picker/DayPickerInput";
import MomentLocaleUtils from "react-day-picker/moment";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HelpSection from "../../components/Bookings/HelpSection";
import SEOUpdate from "../../components/SEO/update";

import {
  getCenter,
  getTime,
  getUser,
  setUser,
} from "../../untils/localStorage";
import { Center, FormUser } from "../../untils/interfaces";
import { emailRegExp, numberRegExp } from "../../untils/stringHelper";

import {
  AddressCenter,
  FullAddressCenter,
  Description,
  IconLocation,
  ImgCab,
  LocationButton,
  NameCenter,
  NameCity,
  OneThird,
  Separator,
  TitleCenter,
  Wrap,
  WrapName,
  WrapSection,
} from "../../components/Bookings/Date/Date.styles";
import { Bold, FlexWrap } from "../../components/Bookings/Globals/index.styles";
import {
  CalendarIcon,
  ContainerMiddle,
  ContainInput,
  DateDescription,
  DescriptionInput,
  ErrorLabel,
  Form,
  Input,
  InputUppercase,
  Label,
  Select,
  SendButton,
  TimeIcon,
  TitleForm,
  TwoThird,
  WrapDatesInfo,
} from "../../components/Bookings/Form/Form.styles";

interface InputTypes {
  firstName: string;
  lastNamePaternal: string;
  lastNameMaternal: string;
  email: string;
  birthdate: string;
  cellphone: string;
  hearAboutUs: string;
}

const form = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, control, setValue } = useForm<
    InputTypes
  >();
  const [center, setCenter] = React.useState<Center>();
  const [time, setTime] = React.useState<string>();
  const [fullAddress, setFullAddress] = useState("");

  React.useEffect(() => {
    const centro = getCenter();
    setFullAddress(
      centro.street +
        ", " +
        centro.district +
        ", " +
        centro.zipCode +
        ", " +
        centro.city.name +
        ", " +
        centro.city.state.name,
    );
    // If no center return to select page
    if (!centro) {
      router.push("/citas");
    }
    setCenter(centro);

    const time = getTime();
    // If no time return to select page
    if (!time) {
      router.push("/citas/fecha");
    }
    setTime(time);

    const user = getUser();
    if (user) {
      setValue("firstName", user.firstName, { shouldValidate: true });
      setValue("lastNamePaternal", user.lastNamePaternal, {
        shouldValidate: true,
      });
      setValue("lastNameMaternal", user.lastNameMaternal, {
        shouldValidate: true,
      });
      setValue("email", user.email, { shouldValidate: true });
      setValue("hearAboutUs", user.hearAboutUs, { shouldValidate: true });
      setValue("cellphone", user.cellphone, { shouldValidate: true });
      setValue("birthdate", user.birthdate, { shouldValidate: true });
    }
  }, []);

  const handleOnSubmit = async (data: InputTypes) => {
    const user: FormUser = {
      firstName: data.firstName.toUpperCase().trim(),
      lastNamePaternal: data.lastNamePaternal.toUpperCase().trim(),
      lastNameMaternal: data.lastNameMaternal.toUpperCase().trim(),
      birthdate: data.birthdate,
      email: data.email.toLowerCase().trim(),
      cellphone: data.cellphone,
      hearAboutUs: data.hearAboutUs,
    };
    setUser(JSON.stringify(user));
    router.push("/citas/pago");
  };

  if (!center || !time) {
    return <div />;
  }

  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/citas/datos"
      />
      <Header noTransaparent />
      <WrapSection>
        <Wrap>
          <OneThird>
            <Fragment>
              <ImgCab />
              <TitleCenter>Eva Center</TitleCenter>
              <NameCity>{center.city.state.name.toLowerCase()}</NameCity>
              <Fragment>
                <div className="pt-4">
                  <WrapDatesInfo>
                    <CalendarIcon />
                    <DateDescription>
                      {moment(time).format("dddd DD MMM yyyy")}
                    </DateDescription>
                  </WrapDatesInfo>
                  <WrapDatesInfo>
                    <TimeIcon />
                    <DateDescription>
                      {moment(time).format("HH:mm a")} -{" "}
                      {moment(time).add("minute", 10).format("HH:mm a")}
                    </DateDescription>
                  </WrapDatesInfo>
                </div>
              </Fragment>
              <WrapName>
                <IconLocation />
                <NameCenter>{center.name.toLowerCase()}</NameCenter>
              </WrapName>

              <AddressCenter>{center.reference}</AddressCenter>

              <FullAddressCenter>
                {fullAddress
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
              </FullAddressCenter>

              <LocationButton href={center.mapUrl} target="_blank">
                <div className="py-4">Abrir ubicación</div>
              </LocationButton>

              <Separator />
              <Description>
                En Eva Center vivirás una experiencia única, íntima, indolora y
                no invasiva en solo <Bold>10 minutos</Bold>.
              </Description>
            </Fragment>
          </OneThird>
          <TwoThird>
            <TitleForm>Completa tu información de contacto</TitleForm>
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
              <ContainInput>
                <Label htmlFor="firstName">Nombre(s)</Label>
                <InputUppercase
                  placeholder=""
                  name="firstName"
                  ref={register({
                    required: true,
                    pattern: numberRegExp,
                    minLength: 3,
                    validate: {
                      name: (value: string) => {
                        const values = value.trim().split(" ");
                        const minChars = values
                          .map((val) => val.length === 1)
                          .reduce((acc, val) => acc || val);
                        if (minChars) {
                          return "Nombre(s) deben ser mas de una letra";
                        }
                      },
                    },
                  })}
                />
                {errors.firstName && (
                  <ErrorLabel>
                    {errors.firstName.type === "required" &&
                      "El nombre es necesario"}
                    {errors.firstName.type === "pattern" &&
                      "El nombre no puede contener números"}
                    {errors.firstName.type === "minLength" &&
                      "El nombre debe ser de 3 letras o mas"}
                    {errors.firstName.type === "name" &&
                      "Nombre(s) debe ser de una letra o mas"}
                  </ErrorLabel>
                )}
              </ContainInput>
              <ContainInput>
                <Label htmlFor="lastNamePaternal">Apellido Paterno</Label>
                <InputUppercase
                  placeholder=""
                  name="lastNamePaternal"
                  ref={register({
                    required: true,
                    pattern: numberRegExp,
                    minLength: 3,
                    validate: {
                      name: (value: string) => {
                        const values = value.trim().split(" ");
                        const minChars = values
                          .map((val) => val.length === 1)
                          .reduce((acc, val) => acc || val);
                        if (minChars) {
                          return "Apellidos(s) deben ser mas de una letra";
                        }
                      },
                    },
                  })}
                />
                {errors.lastNamePaternal && (
                  <ErrorLabel>
                    {errors.lastNamePaternal.type === "required" &&
                      "El apellido es necesario"}
                    {errors.lastNamePaternal.type === "pattern" &&
                      "El apellido no puede contener números"}
                    {errors.lastNamePaternal.type === "minLength" &&
                      "El apellido debe ser de 3 letras o mas"}
                    {errors.lastNamePaternal.type === "name" &&
                      "Apellido(s) debe ser de una letra o mas"}
                  </ErrorLabel>
                )}
              </ContainInput>
              <ContainInput>
                <Label htmlFor="lastNameMaternal">Apellido Materno</Label>
                <InputUppercase
                  placeholder=""
                  name="lastNameMaternal"
                  ref={register({
                    required: true,
                    pattern: numberRegExp,
                    minLength: 3,
                    validate: {
                      name: (value: string) => {
                        const values = value.trim().split(" ");
                        const minChars = values
                          .map((val) => val.length === 1)
                          .reduce((acc, val) => acc || val);
                        if (minChars) {
                          return "Apellidos(s) deben ser mas de una letra";
                        }
                      },
                    },
                  })}
                />
                {errors.lastNameMaternal && (
                  <ErrorLabel>
                    {errors.lastNameMaternal.type === "required" &&
                      "El apellido es necesario"}
                    {errors.lastNameMaternal.type === "pattern" &&
                      "El apellido no puede contener números"}
                    {errors.lastNameMaternal.type === "minLength" &&
                      "El apellido debe ser de 3 letras o mas"}
                    {errors.lastNameMaternal.type === "name" &&
                      "Apellido(s) debe ser de una letra o mas"}
                  </ErrorLabel>
                )}
              </ContainInput>
              <ContainInput>
                <Label>Fecha de nacimiento</Label>
                <Input
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
                    <DescriptionInput>
                      El número de celular será el medio por el cual tu doctora
                      EVA se pondrá en contacto contigo, por lo que debes
                      asegurarte de que sea correcto
                    </DescriptionInput>
                  </ContainerMiddle>
                </FlexWrap>
              </ContainInput>

              <ContainInput>
                <Label>Correo electrónico</Label>
                <FlexWrap>
                  <ContainerMiddle>
                    <Input
                      style={{ width: "100%", textTransform: "lowercase" }}
                      type="email"
                      name="email"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      maxLength={320}
                      ref={register({
                        required: true,
                        minLength: 3,
                        maxLength: 320,
                        pattern: emailRegExp,
                      })}
                    />
                    {errors.email && (
                      <ErrorLabel>
                        {errors.email.type === "required" &&
                          "El correo es necesario"}
                        {errors.email.type === "pattern" &&
                          "El correo no puede contener caracteres especiales"}
                        {errors.email.type === "minLength" &&
                          "El correo debe ser de 3 letras o mas"}
                        {errors.email.type === "maxLength" &&
                          "El correo debe ser de menos de 320 letra"}
                      </ErrorLabel>
                    )}
                  </ContainerMiddle>
                  <ContainerMiddle>
                    <DescriptionInput>
                      Te enviaremos un email de confirmación y este será el
                      medio por el cual se entreguen tus resultados.
                    </DescriptionInput>
                  </ContainerMiddle>
                </FlexWrap>
              </ContainInput>

              <ContainInput>
                <Label>¿Cómo te enteraste de nosotros?</Label>
                <Select
                  placeholder="Selecciona una opción"
                  ref={register({
                    required: true,
                  })}
                  name="hearAboutUs"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="SOCIAL_MEDIA">Redes sociales</option>
                  <option value="FRIENDS_AND_FAMILY">
                    Amigos o familiares
                  </option>
                  <option value="IN_SITU">Los vi en la plaza</option>
                  <option value="MEDIA_OR_PRESS">
                    Medios de comunicación o prensa
                  </option>
                  <option value="OTHER">Otro</option>
                </Select>
                {errors.hearAboutUs && (
                  <ErrorLabel>
                    {errors.hearAboutUs.type === "required" &&
                      "Es necesario seleccionar una opción"}
                  </ErrorLabel>
                )}
              </ContainInput>
              <SendButton type="submit">Agendar</SendButton>
            </Form>
          </TwoThird>
        </Wrap>
      </WrapSection>
      <HelpSection />
      <Footer />
    </Fragment>
  );
};

export default form;
