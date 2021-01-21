export interface CenterFilters {
  kind?: "COMMERCIAL" | "B2B" | "CLINICAL";
  active?: "true" | "false";
  state?: string;
}

export interface Center {
  id: string;
  kind: "COMMERCIAL" | "B2B" | "CLINICAL";
  name: string;
  email: string;
  slugName: string;
  calendarUrl: string;
  calendarId: string;
  state: string;
  district: string;
  street: string;
  zipCode: string;
  reference: string;
  deleted: boolean;
  active: boolean;
  mapUrl: string;
  city: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    name: string;
    state: {
      id: string;
      createdAt: string;
      updatedAt: string;
      deleted: boolean;
      name: string;
      code: string;
      country: string;
    };
  };
}

export interface Time {
  time: string;
}

export const CenterDefault: Center = {
  id: "",
  kind: "COMMERCIAL",
  name: "",
  email: "",
  slugName: "",
  calendarUrl: "",
  calendarId: "",
  state: "",
  district: "",
  street: "",
  zipCode: "",
  reference: "",
  deleted: false,
  active: false,
  mapUrl: "",
  city: {
    id: "",
    createdAt: "",
    updatedAt: "",
    deleted: false,
    name: "",
    state: {
      id: "",
      createdAt: "",
      updatedAt: "",
      deleted: false,
      name: "",
      code: "",
      country: "",
    },
  },
};

export interface CustomCenter {
  id: string;
  name: string;
  stateCode: string;
  calendarId: string;
  street: string;
  district: string;
  city: string;
  reference: string;
  zipCode: string;
}

export const CustomCenterDefault: CustomCenter = {
  id: "",
  name: "",
  stateCode: "",
  calendarId: "",
  street: "",
  district: "",
  city: "",
  reference: "",
  zipCode: "",
};

export interface GetCentersResponse {
  data: {
    centers: Center[];
  };
}

export interface GetCenterResponse {
  data: {
    center: Center;
  };
}

export interface DateProps {
  day: number;
  month: number;
  year: number;
}

export interface NavbarProps {
  nextMonth?: Date;
  previousMonth?: Date;
  onPreviousClick: () => void;
  onNextClick: () => void;
  className?: string;
  localeUtils?: {
    getMonths(
      locale?: string,
    ): [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
  };
}

export interface DateRangeProps {
  start: {
    day: number;
    month: number;
    year: number;
  };
  end: {
    day: number;
    month: number;
    year: number;
  };
}

export interface CalendarDatetimes {
  date: string;
  times: Time[];
}

export interface Time {
  time: string;
}

export interface Dates {
  date: string;
  times: { time: string }[];
}

export interface CalendarProps {
  id: number;
  name: string;
  price: string;
  active: boolean;
  calendarIDs: number[];
  slug: string;
  datetimes: CalendarDatetimes[];
}

export interface GetCalendarResponse {
  data: CalendarResponse;
}

export interface CalendarResponse {
  datetimes: CalendarDatetimes[];
  months: string[];
}

export interface User {
  firstName: string;
  lastName: string;
  birthdate: string;
  cellphone: string;
  email: string;
  hearAboutUs?: string;
  sex?: string;
}

export interface FormUser {
  firstName: string;
  lastNamePaternal: string;
  lastNameMaternal: string;
  birthdate: string;
  cellphone: string;
  email: string;
  hearAboutUs: string;
  sex?: string;
}

export const UserDefault = {
  firstName: "",
  lastName: "",
  birthdate: "",
  cellphone: "",
  email: "",
  hearAboutUs: "",
};

export interface UserBooking {
  firstName: string;
  lastName: string;
  birthdate: string;
  cellphone: string;
  email: string;
  centerId: string;
  datetime: string;
  aboutUs?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  test?: boolean;
  hearAboutUs?: string;
  code?: string;
  token?: string;
  sex: string;
  calendarId?: number;
  medium: string;
  amount?: number;
  currency?: "mxn";
  paymentFirstName?: string;
  paymentLastName?: string;
  fake?: boolean;
}

export interface UserBookingResponse {
  acuityBookingId: string;
  bookingConfirmed: boolean;
  bookingConfirmedDatetime?: string;
  centerId: string;
  createdAt: string;
  datetime: string;
  deleted: boolean;
  id: string;
  paymentId: string;
  problemComments?: string;
  problemFound: boolean;
  rebookingId?: string;
  secondsDuration: number;
  status: string;
  updatedAt: string;
  userId: string;
  utmCampaign: string;
  utmContent: string;
  utmMedium: string;
  utmTerm: string;
  utmSource: string;
  payment: {
    amountPaid: number;
    couponId?: string;
    createdAt: string;
    currency: string;
    datetime: string;
    deleted: boolean;
    id: string;
    kind: string;
    medium: string;
    method: string;
    originalPrice: number;
    paid: boolean;
    paymentReceiptUrl?: string;
    percentageDiscountPrice: number;
    providerId?: string;
    status: string;
    updatedAt: string;
  };
  paymentCaptured?: {
    amount: number;
    amountCapturable: number;
    amountReceived: number;
    currency: string;
    customer: string;
    description: string;
    id: string;
    metadata: {
      source: string;
      user_id: string;
    };
    status: string;
  };
  paymentOxxo?: {
    amount?: number;
    currency?: string;
    expiresAfter?: number; // UNIX timestamp
    number?: string;
    status?: string;
  };
  user: {
    auth0Id?: string;
    birthdate: string;
    cellphone: string;
    createdAt: string;
    deleted: boolean;
    email: string;
    firstName: string;
    hearAboutUs: string;
    id: string;
    lastName: string;
    password: string;
    rfc: string;
    sex: string;
    stripeId: string;
    test: boolean;
    updatedAt: string;
    username: string;
    zendeskId?: string;
  };
  coupon: {
    active: boolean;
    code: string;
    createdAt: string;
    currentPercentageDiscount: number;
    deleted: boolean;
    endDate?: string;
    id: string;
    kind: string;
    remainingUsages?: number;
    startDate: string;
    updatedAt: string;
    userId: string;
  };
}

export interface PostUserBookingResponse {
  data: {
    booking: UserBookingResponse;
  };
}

export interface ModalProps {
  showModal: (hookValue: boolean) => void;
}

export interface ValidateCouponResponse {
  data: {
    coupon: {
      active: boolean;
      code: string;
      createdAt: string;
      currentPercentageDiscount: number;
      deleted: boolean;
      endDate: string;
      id: string;
      kind: string;
      remainingUsages: number;
      startDate?: string;
      updatedAt: string;
      user: string;
    };
  };
}

export type OxxoPayResponse = {
  oxxoPaymentData: {
    amount: number;
    currency: string;
    expiresAfter: number;
    number: string;
    status: string;
  };
  paymentIntentId: string;
  internalData: {
    coupon: {
      active: boolean;
      code: string;
      createdAt: string;
      currentPercentageDiscount: number;
      deleted: boolean;
      endDate: string | null;
      id: string;
      kind: string;
      remainingUsages: number | null;
      startDate: string;
      updatedAt: string;
      user: string;
    };
    payment: {
      amountPaid: number;
      amountToPay: number;
      createdAt: string;
      currency: string;
      datetime: string;
      id: string;
      kind: string;
      medium: string;
      method: string;
      originalPrice: number;
      paid: boolean;
      percentageDiscountPrice: number;
      providerId: string;
      status: string;
      updatedAt: string;
    };
    user: {
      birthdate: string;
      cellphone: string;
      createdAt: string;
      email: string;
      firstName: string;
      id: string;
      lastName: string;
      preferredName: string;
      rfc: string;
      sex: string;
      stripeId: string;
      test: boolean;
      updatedAt: string;
    };
    usersMemberships: {
      availableBookings: number;
      availableConsultations: number;
      availableGuests: number;
      availableUltrasounds: number;
      createdAt: string;
      endDate: string;
      membership: string;
      payment: string;
      startDate: string;
      updatedAt: string;
    };
  };
};

export interface UtmsProps {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  test?: boolean;
}
