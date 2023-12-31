"use client";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DehazeIcon from "@mui/icons-material/Dehaze";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Button, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React from "react";
import ImageLogo from "../../public/full-m2H7K9N4A0d3Z5d3.png";
import IconEnglish from "../../public/united-kingdom-flag-icon.svg";
import IconVietNam from "../../public/vietnam-flag-icon.svg";

type Props = { isNavbar: Boolean };

export default function Header({ isNavbar }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [anchorE2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorE2);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickLanguage = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setAnchorEl2(null);
  };
  return (
    <div className="flex justify-between items-center py-2">
      <button>
        <DehazeIcon sx={{ marginLeft: "15px" }} />
      </button>
      <div className=""></div>
      <div className="flex justify-center items-center ">
        <Button
          id="demo-customized-button"
          aria-controls={open2 ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? "true" : undefined}
          variant="text"
          disableElevation
          onClick={handleClickLanguage}
        >
          <Image src={IconVietNam} alt="" width={30} height={30} />
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          anchorEl={anchorE2}
          open={open2}
          onClick={handleCloseLanguage}
        >
          <MenuItem
            onClick={handleCloseLanguage}
            disableRipple
            style={{ fontSize: 15 }}
          >
            <Image
              src={IconVietNam}
              alt=""
              width={30}
              height={30}
              style={{ marginRight: 8 }}
            />
            Việt Nam
          </MenuItem>
          <MenuItem
            onClick={handleCloseLanguage}
            disableRipple
            style={{ fontSize: 15 }}
          >
            <Image
              src={IconEnglish}
              alt=""
              width={30}
              height={30}
              style={{ marginRight: 8 }}
            />
            English
          </MenuItem>
        </Menu>
        <NotificationsActiveIcon style={{ marginRight: 13 }} />
        <div className="rounded-full">
          <Image src={ImageLogo} alt="" width={40} height={40} />
        </div>
        <div className="mr-2">
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="text"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ color: "#5a5a5a" }}
          >
            Hoàng Văn Sơn
          </Button>
          <Menu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              onClick={handleClose}
              disableRipple
              style={{ fontSize: 15 }}
            >
              <AccountBoxIcon style={{ marginRight: 5 }} />
              Thông tin cá nhân
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              disableRipple
              style={{ fontSize: 15 }}
            >
              <LogoutIcon style={{ marginRight: 5, marginLeft: 2 }} />
              Đăng xuất
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
