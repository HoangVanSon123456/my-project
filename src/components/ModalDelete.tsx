import React from "react";
import { Button, Modal } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/joy";
import { closeModal } from "@/utils/common";

type Props = {
  showModalDelete: boolean;
  submitAction: Function;
  changeShow: Function;
};

export default function ModalDelete({
  showModalDelete,
  submitAction,
  changeShow,
}: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalDelete}
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
          Xóa
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
          Bạn có chắc chắn muốn xóa ?
        </Typography>
        <hr></hr>
        <div className="text-end mt-3">
          <Button
            onClick={() => submitAction()}
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
