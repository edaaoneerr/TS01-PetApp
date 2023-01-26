export interface IUsers{
  fullName: string;
  name: string;
  surname: string;
  username: string;
  user_password: string;
  gender: string;
  email: string;
  phone_number: string;
  address: string;
  is_vet: boolean;

};
export interface IPet{
  name: string;
  gender: string;
  age: number;
  pet_type: string;
  pet_breed: string;
};
export interface IClinic{
  clinic_name: string;
  clinic_description: string;

};
export interface IAddress{
  city: string;
  district: string;
  street: string;
  zip_code: string;
  address: string;
  title: string;

};