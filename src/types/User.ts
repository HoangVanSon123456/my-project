import { ItemParam } from "@/utils/common";

export enum Status {
  Active = 1,
  Inactive = 2,
  Lock = 3,
}

export const Statuses: ItemParam[] = [
  { id: Status.Active, name: "Đang hoạt động" },
  { id: Status.Inactive, name: "Không họat động" },
  { id: Status.Lock, name: "Khóa tài khoản" },
];
export default interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  address?: string;
  password?: string;
  phone?: string;
  status: Status;
}
