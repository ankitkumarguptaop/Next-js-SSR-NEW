import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import { Grid } from "@mui/material";
import Link from "next/link";

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
    reviewerName: string;
    comment: string;
  }[];
}

export default function ProductCard(product: Products) {
  return (
    <>
      <Grid size={{ xs: 12, md: 6, xl: 3 }} key={product.id}>
        <Card
          sx={{ maxWidth: 345, cursor: "pointer" }}
        >
          <Link
          passHref
            href={`products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={product.thumbnail}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
            passHref
              href={`products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" size="small">
                Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
