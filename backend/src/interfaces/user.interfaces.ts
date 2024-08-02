export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  district: string;
  location: string;
  user_role: string;
  donor_flag: boolean;
}

export interface IHealthCenter extends IUser {
  images: string;
  type: string;
}

export interface IDonorInformation extends IUser {
  gender: string;
  bloodGroup: string;
  lastDonated: Date;
  donatedCount: number;
  weight: number;
  age: number;
}

export interface getUserQuery {
  name?: string;
  district?: string;
  location?: string;
  bloodGroup?: string;
}
