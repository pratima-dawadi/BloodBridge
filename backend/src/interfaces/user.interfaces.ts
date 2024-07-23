export interface User {
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

export interface HealthCenter extends User {
  images: string;
  type: string;
}

export interface DonorInformation extends User {
  gender: string;
  bloodGroup: string;
  lastDonated: Date;
  donatedCount: number;
  weight: number;
  age: number;
}
