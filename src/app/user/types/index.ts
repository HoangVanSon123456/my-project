import { BaseSearch } from "@/service/Pagination";

export default interface SearchUser extends BaseSearch {
  fullName?: string;
  userName?: string;
  phone?: string;
  email?: string;
}
