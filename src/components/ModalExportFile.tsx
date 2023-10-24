"use Client";
import { Button, Modal } from "@mui/material";
import React from "react";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import { Typography } from "@mui/joy";

type Props = { showModalExport: boolean; handleCloseModalExport: Function };

export default function ModalExportFile({
  showModalExport,
  handleCloseModalExport,
}: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalExport}
      onClose={() => handleCloseModalExport()}
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
          mb={1}
          mt={1}
        >
          Bạn có chắc chắn muốn xuất tài liệu ?
        </Typography>
        <hr></hr>
        <div className="text-end mt-2">
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              color: "red",
              size: "medium",
              borderColor: "red",
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
            }}
            onClick={() => handleCloseModalExport()}
          >
            Thoát
          </Button>
        </div>
      </Sheet>
    </Modal>
  );
}
