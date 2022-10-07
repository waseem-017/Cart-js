import { useContext } from 'react';

import MealItemForm from './Product_ItemForm';
import classes from './Product_Item.module.css';
import CartContext from '../../../store/cart-context';

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = quantity => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
    <div  className={classes.meal_left}>
    <div className={classes.image}>
      <img src={props.image} alt="Product Img"/>
    </div>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
