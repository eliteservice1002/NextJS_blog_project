export interface UserProps {
  firstName: string;
  paternalLastName: string;
  maternalLastName: string;
  birthdate: string;
  email: string;
  cellphone: string;
  extraInfo: {
    insurance: {
      sex: string;
      city: string;
      cancer: boolean;
    };
  };
}
