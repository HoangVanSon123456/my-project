import React from "react";
import { Button, Modal } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import { Typography } from "@mui/joy";

type Props = { showModalDelete: boolean; handleCloseModalDelete: Function };

export default function ModalDelete({
  showModalDelete,
  handleCloseModalDelete,
}: Props) {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={showModalDelete}
      onClose={() => handleCloseModalDelete()}
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
            onClick={() => handleCloseModalDelete()}
          >
            Thoát
          </Button>
        </div>
      </Sheet>
    </Modal>
  );
}
