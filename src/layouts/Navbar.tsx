"use client";
import Cloud from "@mui/icons-material/Cloud";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentPaste from "@mui/icons-material/ContentPaste";
import HomeIcon from "@mui/icons-material/Home";
import { Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Image from "next/image";
import Link from "next/link";
import IconFoodLogo from "../../public/logoRes.jpg";
type Props = { isNavbar: Boolean };

export default function Navbar({ isNavbar }: Props) {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <Image src={IconFoodLogo} alt="" />
      </div>
      <MenuList sx={{ marginTop: 3 }}>
        <MenuItem sx={{ padding: 1.5, marginLeft: 2 }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: 1.5 }}>
            <Link href="/" className="text-lg">
              Trang chủ
            </Link>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ padding: 1.5, marginLeft: 2 }}>
          <ListItemIcon>
            <ContentCut />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: 1.5 }}>
            <Link href="/user" className="text-lg">
              Quản lý nhân viên
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ padding: 1.5, marginLeft: 2 }}>
          <ListItemIcon>
            <ContentCopy />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: 1.5 }}>
            <Link href="/customer" className="text-lg">
              Quản lý khách hàng
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ padding: 1.5, marginLeft: 2 }}>
          <ListItemIcon>
            <ContentPaste />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: 1.5 }}>
            <Link href="/customer" className="text-lg">
              Quản lý sản phẩm
            </Link>
          </ListItemText>
        </MenuItem>
        <MenuItem sx={{ padding: 1.5, marginLeft: 2 }}>
          <ListItemIcon>
            <Cloud />
          </ListItemIcon>
          <ListItemText sx={{ marginLeft: 1.5 }}>
            <Link href="/customer" className="text-lg">
              Quản lý tồn kho
            </Link>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
}
