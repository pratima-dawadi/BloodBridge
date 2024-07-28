export interface IDonate {
  donorId: string;
  recipientType: string;
  recipientId: string;
  bloodType: string;
  quantity: number;
  donationDate: Date;
}

export interface IRequest {
  requesterId: string;
  supplierType: string;
  supplierId: string;
  bloodType: string;
  quantity: number;
  urgency: boolean;
  requestDate: Date;
  requiredDate: Date;
}
