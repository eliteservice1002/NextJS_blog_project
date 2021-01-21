export interface Plan {
  count: number;
  interval: string;
  type: string;
}

export interface UserProps {
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  birthdate: string;
  email: string;
  cellphone: string;
  hearAboutUs: string;
  extraInfo: {
    membership: {
      sex: string;
      city: string;
      cancer: boolean;
    };
  };
}
