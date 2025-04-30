import { Box, Typography } from "@mui/material";
import styles from "./product.module.css";
import Image from "next/image";
import { MoonLoader } from "react-spinners";
import { getProductService } from "@/services/product.service";
import { Products } from "../page";
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product: Products = await getProductService(Number(id));
  return (
    <>
      <Box className={styles["product"]}>
        <Box className={styles["product-image"]}>
          {product?.thumbnail && (
            <Image
              alt={product?.title}
              src={product?.thumbnail}
              width="500"
              height="500"
            ></Image>
          )}
        </Box>
        <Box className={styles["product-description"]}>
          <Typography fontSize={35} fontWeight={400} margin={8}>
            {product?.title}
            {product?.description}
          </Typography>
          <Typography fontSize={32} fontWeight="light" margin={8}>
            Price : $ {product?.price}
          </Typography>

          <Box>
            <Typography fontSize={20} fontWeight="Bold" padding={3}>
              Reviews
            </Typography>
            {product?.reviews?.map((review, index) => {
              return (
                <Box key={`${review.date}-${index}`}>
                  <Typography fontSize={20} fontWeight="Bold" marginLeft={8}>
                    {review?.reviewerName}
                  </Typography>
                  <Typography fontSize={15} fontWeight="light" marginLeft={8}>
                    - {review?.comment}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
