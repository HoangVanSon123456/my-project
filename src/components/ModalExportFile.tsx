"use Client";
import { Button, Modal } from "@mui/material";
import React from "react";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/joy";
import { closeModal } from "@/utils/common";

type Props = {
  showModalExport: boolean;
  changeShow: Function;
};

export default function ModalExportFile({
  showModalExport,
  changeShow,
}: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalExport}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: 600,
          borderRadius: "md",
          p: 2,
          boxShadow: "lg",
        }}
      >
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          Xuất tài liệu
        </Typography>
        <hr></hr>
        <Typography
          component="h5"
          id="modal-title"
          level="body-sm"
          textColor="inherit"
          fontWeight="lg"
          mb={1.5}
          mt={1.5}
        >
          Bạn có chắc chắn muốn xuất tài liệu ?
        </Typography>
        <hr></hr>
        <div className="text-end mt-3">
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              color: "red",
              size: "medium",
              borderColor: "red",
              "&:hover": {
                borderColor: "#FF0000",
                color: "#FF0000",
              },
            }}
          >
            Xác nhận
          </Button>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              marginLeft: 1,
              color: "#404040",
              borderColor: "#404040",
              "&:hover": {
                borderColor: "#708090",
                color: "#708090",
              },
            }}
            onClick={() => closeModal(changeShow)}
          >
            Thoát
          </Button>
        </div>
      </Sheet>
    </Modal>
  );
}
