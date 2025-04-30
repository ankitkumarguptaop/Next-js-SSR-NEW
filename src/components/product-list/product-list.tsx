import { Box, Grid, Pagination, Stack, TextField } from "@mui/material";
import ProductCard from "@/components/product-cart/product-cart";
import styles from "./products.module.css";
import { listProductService } from "@/services/product.service";
import PaginationComponent from "../pagiation/pagination";

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

export default async function ProductList({ search, page, limit = 8 }) {
  const products: { products: Products[]; total: number } =
    await listProductService({ search, page, limit });
  console.log("✌️products --->", products);

  return (
    <>
      <Box className={styles["products"]}>
        <Grid container height="85%" spacing={2}>
          {products?.products?.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              image={product.thumbnail}
              id={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              reviews={product.reviews}
            />
          ))}
        </Grid>

        <PaginationComponent
          page={page}
          totalPage={Math.ceil(products.total / limit)}
        ></PaginationComponent>
      </Box>
    </>
  );
}
