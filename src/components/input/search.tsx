"use client";

import { Box, TextField } from "@mui/material";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Box className={styles["text-feild"]}>
      <TextField
        id="text-feild"
        label="Search Porducts"
        variant="filled"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </Box>
  );
}
