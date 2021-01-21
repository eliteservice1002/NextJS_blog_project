import React, { Fragment, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { useRouter } from "next/router";

import Footer from "../Footer";
import SEOUpdate from "../../SEO/update";
import { CloseIcon } from "./Icons";
import {
  Label as Labelv2,
  Input as Inputv2,
} from "../Scheduler/Wrappers.styles";
import InputPhone from "../Scheduler/Input";
import { Calendar } from "./Calendar";
import covid from "../../../assets/images/preventionRange/covid.svg";

import {
  getCenter,
  getTime,
  getUser,
  setUser,
  // getPhone,
  // getEmail,
} from "../../../untils/localStorage";
import { Center, FormUser } from "../../../untils/interfaces";
import { emailRegExp, numberRegExp } from "../../../untils/stringHelper";

import {
  AddressCenter,
  FullAddressCenter,
  Description,
  IconLocation,
  ImgCab,
  LocationButton,
  NameCenter,
  NameCity,
  Separator,
  TitleCenter,
  WrapName,
} from "../../Bookings/Date/Date.styles";
import { Bold, FlexWrap } from "../../Bookings/Globals/index.styles";
import {
  CalendarIcon,
  ContainerMiddle,
  ContainInput,
  DateDescription,
  DescriptionInput,
  ErrorLabel,
  Form,
  Input,
  Label,
  SendButton,
  TimeIcon,
  TitleForm,
  TwoThird,
  WrapDatesInfo,
} from "../../Bookings/Form/Form.styles";
import SelectCustom from "../Scheduler/CustomSelect";

interface InputTypes {
  firstName: string;
  lastNamePaternal: string;
  lastNameMaternal: string;
  email: string;
  birthdate: string;
  cellphone: string;
  hearAboutUs: string;
}

const form = ({ route }: { route: string }) => {
  const router = useRouter();
  const { register, handleSubmit, errors, control, setValue } = useForm<
    InputTypes
  >();
  const [center, setCenter] = React.useState<Center>();
  const [time, setTime] = React.useState<string>();
  const [fullAddress, setFullAddress] = useState("");
  const [startDate, setStartDate] = useState();

  React.useEffect(() => {
    const centro = getCenter();
    window.scrollTo(0, 0);
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
      birthdate: moment(startDate).format("YYYY-MM-DD"),
      email: data.email.toLowerCase().trim(),
      cellphone: `+52${data.cellphone}`,
      hearAboutUs: data.hearAboutUs,
    };
    setUser(JSON.stringify(user));
    router.push(`/${route}/pago`);
  };

  if (!center || !time) {
    return <div />;
  }

  const onChangeCalendar = (e) => {
    setStartDate(e);
  };

  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url={`https://evacenter.com/${route}/datos`}
      />
      <div className="pt-2 lg:pt-1 w-full">
        <div className="flex items-center pl-4 md:pl-8 pt-8 lg:pl-32 lg:pb-4 lg:pt-12">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push(`/${route}`);
            }}
          >
            <CloseIcon />
          </div>
        </div>
      </div>

      <div className="px-4 pb-10 pt-2 lg:flex lg:px-sl lg:py-6">
        <div className="hidden lg:flex lg:flex-col w-full lg:w-1/3 px-4 pt-2 lg:p-16">
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
              En Eva Center vivirás una experiencia única, íntima, indolora y no
              invasiva en solo <Bold>10 minutos</Bold>.
            </Description>
          </Fragment>
        </div>
        <div className="w-full lg:w-2/3 px-4 pt-4 lg:pt-2 lg:p-16">
          <TitleForm>Completa tu información de contacto</TitleForm>
          <Form onSubmit={handleSubmit(handleOnSubmit)}>
            <ContainInput>
              <div className="mt-2">
                <Labelv2>Nombre (s)</Labelv2>
                <Inputv2
                  type="text"
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
                  placeholder="Nombre"
                  autoComplete="off"
                  minLength={3}
                  maxLength={255}
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
              </div>
            </ContainInput>
            <ContainInput>
              <div className="mt-2">
                <Labelv2>Apellido Paterno</Labelv2>
                <Inputv2
                  type="text"
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
                  placeholder="Apellido paterno"
                  autoComplete="off"
                  minLength={3}
                  maxLength={255}
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
              </div>
            </ContainInput>
            <ContainInput>
              <FlexWrap>
                <ContainerMiddle>
                  <div className="mt-2">
                    <Labelv2>Apellido Materno</Labelv2>
                    <Inputv2
                      type="text"
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
                      placeholder="Apellido materno"
                      autoComplete="off"
                      minLength={3}
                      maxLength={255}
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
                  </div>
                </ContainerMiddle>
                <ContainerMiddle>
                  <div
                    className="text-brownDark text-xs py-2 leading-120 lg:mx-4 lg:h-full lg:flex lg:items-end lg:justify-end font-normal "
                    style={{ fontFamily: "Work Sans" }}
                  >
                    Asegúrate de que coincida con el nombre que aparece en tu
                    identificación oficial.
                  </div>
                </ContainerMiddle>
              </FlexWrap>
            </ContainInput>
            <ContainInput>
              <Controller
                name="birthdate"
                control={control}
                render={({ onChange, value }) => (
                  <Calendar
                    startDate={startDate}
                    onChange={(e) => {
                      onChangeCalendar(e);
                      onChange(e);
                    }}
                  />
                )}
                rules={{ required: true }}
                defaultValue=""
              />
              <div>
                {errors.birthdate && (
                  <ErrorLabel>
                    {errors.birthdate.type === "required" &&
                      "La fecha de nacimiento es necesaria"}
                  </ErrorLabel>
                )}
              </div>
            </ContainInput>
            <ContainInput>
              <FlexWrap>
                <ContainerMiddle>
                  <InputPhone
                    type="text"
                    label="WHATSAPP"
                    maxlength="10"
                    placeholder="55 0000 0000"
                    autocomplete="tel-national"
                    name="cellphone"
                    refs={register({
                      required: true,
                      minLength: 10,
                    })}
                  />
                  <div>
                    {errors.cellphone && (
                      <ErrorLabel>
                        {errors.cellphone.type === "required" &&
                          "El teléfono es necesario"}
                        {errors.cellphone.type === "minLength" &&
                          "El teléfono tiene que ser igual a 10 digitos"}
                      </ErrorLabel>
                    )}
                  </div>
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
              <FlexWrap>
                <ContainerMiddle>
                  <div className="mt-2">
                    <Labelv2>Correo electrónico</Labelv2>
                    <Inputv2
                      style={{ width: "100%", textTransform: "lowercase" }}
                      type="email"
                      name="email"
                      ref={register({
                        required: true,
                        minLength: 3,
                        maxLength: 320,
                        pattern: emailRegExp,
                      })}
                      placeholder=""
                      autoComplete="email"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      minLength={3}
                      maxLength={320}
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
                  </div>
                </ContainerMiddle>
                <ContainerMiddle>
                  <DescriptionInput>
                    Te enviaremos un email de confirmación y este será el medio
                    por el cual se entreguen tus resultados.
                  </DescriptionInput>
                </ContainerMiddle>
              </FlexWrap>
            </ContainInput>
            <ContainInput>
              <Controller
                render={({ onChange, onBlur, value, name }) => (
                  <SelectCustom
                    firstText="Selecciona una opción"
                    label="¿Cómo te enteraste de nosotros?"
                    options={[
                      <option value="SOCIAL_MEDIA">Redes sociales</option>,
                      <option value="FRIENDS_AND_FAMILY">
                        Amigos o familiares
                      </option>,
                      <option value="IN_SITU">Los vi en la plaza</option>,
                      <option value="MEDIA_OR_PRESS">
                        Medios de comunicación o prensa
                      </option>,
                      <option value="OTHER">Otro</option>,
                    ]}
                    onChange={(e) => {
                      console.log(e.props.value);
                      onChange(e.props.value);
                    }}
                  />
                )}
                name="hearAboutUs"
                control={control}
                defaultValue=""
                rules={{ required: true }}
              />
              {errors.hearAboutUs && (
                <ErrorLabel>
                  {errors.hearAboutUs.type === "required" &&
                    "Es necesario seleccionar una opción"}
                </ErrorLabel>
              )}
            </ContainInput>
            <SendButton className="w-full lg:w-40" type="submit">
              Continuar
            </SendButton>

            <div className="lg:hidden text-darkbrown font-hthaptik font-thin text-xs bg-prevention20-lightpink leading-3 p-4 mt-4 flex rounded">
              <div className="pr-6">
                Todas las instalaciones son completamente sanitizadas siguiendo
                <span className="font-bold">
                  {" "}
                  un plan estricto de limpieza, higiene y desinfección.
                </span>
              </div>
              <img src={covid} alt="" />
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default form;
