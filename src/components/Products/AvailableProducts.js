import Card from '../UI/Card';
import ProductItem from './Product-Item/Product_Item';
import classes from './AvailableProducts.module.css';

const DUMMY_productS = [
  {
    id: 'm1',
    name: 'Samsung mobile',
    description: 'Mobile under 30000',
    price: 30000,
    image:"https://firebasestorage.googleapis.com/v0/b/stock-mgmt-system.appspot.com/o/product%20(1).jpg?alt=media&token=33b08723-b141-4b68-85f8-cb2253472e66"
  },
  {
    id: 'm2',
    name: 'Iphone 13',
    description: 'Apple phone',
    price: 25000,
    image:"https://firebasestorage.googleapis.com/v0/b/stock-mgmt-system.appspot.com/o/product%20(1).jpg?alt=media&token=33b08723-b141-4b68-85f8-cb2253472e66"
  },
  {
    id: 'm3',
    name: 'RedMi 8 Pro',
    description: 'Budget phone',
    price: 50000,
    image:"https://firebasestorage.googleapis.com/v0/b/stock-mgmt-system.appspot.com/o/product%20(1).jpg?alt=media&token=33b08723-b141-4b68-85f8-cb2253472e66"
  },
  {
    id: 'm4',
    name: 'OnePlue 9T',
    description: 'fast and furious',
    price: 10000,
    image:"https://firebasestorage.googleapis.com/v0/b/stock-mgmt-system.appspot.com/o/product%20(1).jpg?alt=media&token=33b08723-b141-4b68-85f8-cb2253472e66"
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_productS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
