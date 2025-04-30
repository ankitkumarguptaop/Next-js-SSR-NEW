"use client";
import { Box, Pagination, Stack } from "@mui/material";
import React from "react";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationComponent = ({
  page,
  totalPage,
}: {
  page: number;
  totalPage: number;
}) => {
  const searchParams = useSearchParams(); // give query params
  const pathname = usePathname(); // give current path name 
  const { replace } = useRouter(); // give access to navigate with replace url

  function handleChange(e, page) {
    const params = new URLSearchParams(searchParams); // use to get formatted params
    params.set("page", page);
 replace(`${pathname}?${params.toString()}`); // replace the params with new params
  }

  return (
    <Box className={styles["pagination"]}>
      <Stack spacing={2}>
        <Pagination
          page={page}
          count={totalPage}
          defaultPage={page}
          variant="outlined"
          shape="rounded"
          onChange={(e, page: number) => {
            handleChange(e, page);
          }}
        />
      </Stack>
    </Box>
  );
};

export default PaginationComponent;
