import { MoonLoader } from "react-spinners";
import Search from "@/components/input/search";
import ProductList from "@/components/product-list/product-list";
import { Suspense } from "react";
import { Box } from "@mui/material";
export interface Products {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  thumbnail: string;
  reviews: {
    date: string;
    reviewerName: string;
    comment: string;
  }[];
}

export default async function ProductsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Search></Search>
      <Suspense
        key={query + currentPage}
        fallback={
          <Box display="flex" justifyContent="center">
            <MoonLoader />
          </Box>
        }
      >
        <ProductList search={query} page={currentPage}></ProductList>
      </Suspense>
    </>
  );
}
