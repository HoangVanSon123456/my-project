import { ItemParam } from "@/utils/common";

export const Status: ItemParam[] = [
  { id: 1, name: "Đang hoạt động" },
  { id: 2, name: "Không họat động" },
  { id: 3, name: "Khóa tài khoản" },
];
export default interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  userName?: string;
  email?: string;
  address?: string;
  password?: string;
  phone?: string;
  status?: number;
}
