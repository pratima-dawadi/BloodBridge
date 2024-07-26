export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  district: string;
  location: string;
  userRole: string;
  donorFlag: boolean;
}

export interface IHealthCenter extends IUser {
  userId?: string;
  image: string;
  type: string;
}

export interface IDonorInformation extends IUser {
  userId?: string;
  gender: string;
  bloodGroup: string;
  lastDonated: Date;
  donatedCount: number;
  weight: number;
  age: number;
}
