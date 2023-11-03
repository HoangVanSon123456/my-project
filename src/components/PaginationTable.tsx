import { Pagination } from "@mui/material";
import React from "react";

type Props = {
  countItem: number;
  totalPage: number;
  currentPage: number;
  handlePageChange: Function;
};

export default function PaginationTable({
  countItem,
  totalPage,
  currentPage,
  handlePageChange,
}: Props) {
  const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
    if (handlePageChange) handlePageChange(event, page);
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-base">Tổng số bản ghi: {countItem}</p>
      </div>
      <div className="">
        {totalPage > 1 && (
          <Pagination
            count={totalPage}
            page={currentPage}
            variant="outlined"
            color="primary"
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}
