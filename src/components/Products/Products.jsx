import './Products.css';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from "./styles"

export default function Products() {
  const classes = useStyles()
  const products = [
    {
      id: 1,
      name: 'Shoes',
      description: 'Running Shoes',
      price: '$5',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAOzSiDjZQLg7_cHaaTWHEK1sUHjRo-JkIOjWvvigow4dvmo8pInGebh0a-xB2hmYCL8QCu0EWw&usqp=CAc',
    },
    {
      id: 2,
      name: 'Macbook',
      description: 'Apple Macbook',
      price: '$100',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lMkpbkTsZ__17ywh525vDOzBjQLhiFF2rz1odTuuHwTb9e97MdGSV5L8vhfB8Gg4PhjkomQ&usqp=CAc',
    },
  ];

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
