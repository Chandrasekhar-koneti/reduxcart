import classes from './CartButton.module.css';
import { uiActions } from '../../Store/ui-slice';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {

  const dispatch=useDispatch()
  const togglecarthandler=()=>{
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={togglecarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
