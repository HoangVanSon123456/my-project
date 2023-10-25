import React from "react";
import IconFoodLogo from "../../public/IconFoodLogo.png";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import Link from "next/link";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <div>
      <div className="">
        <Image
          src={IconFoodLogo}
          alt=""
          width={150}
          height={150}
          style={{ marginLeft: "50px" }}
        />
      </div>
      <div className="">
        <MenuList>
          <MenuItem sx={{ paddingY: 1.5 }}>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link href="/user">Quản lý nhân viên</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem sx={{ paddingY: 1.5 }}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Link href="/customer">Quản lý khách hàng</Link>
            </ListItemText>
          </MenuItem>
          <MenuItem sx={{ paddingY: 1.5 }}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Quản lý sản phẩm</ListItemText>
          </MenuItem>
          <MenuItem sx={{ paddingY: 1.5 }}>
            <ListItemIcon>
              <Cloud fontSize="small" />
            </ListItemIcon>
            <ListItemText>Quản lý tồn kho</ListItemText>
          </MenuItem>
        </MenuList>
      </div>
    </div>
  );
}
