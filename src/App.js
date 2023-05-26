import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './Store/cart-actions';

let isInitial=true

function App() {

  const showCart=useSelector((state)=>state.ui.cartIsVisible)
  const cart= useSelector((state)=>state.cart)
  const notification=useSelector((state)=>state.ui.notification)
   const dispatch=useDispatch()

   useEffect(()=>{
    dispatch(fetchCartData)
   },[dispatch])

  useEffect(()=>{
    // const sendCartData=async()=>{
      // dispatch(uiActions.showNotification({
      //   status:'pending' ,
      //   title:'sending...',
      //   message:'sending cart data'
      // }))
      // const response= await fetch('https://expense-tracker-a2833-default-rtdb.firebaseio.com/cart.json',{
      //   method:'PUT',
      //   body:JSON.stringify(cart)
      // })

      // if(!response.ok){
      //   throw new Error('sending cart data failed')
      // }

      // dispatch(uiActions.showNotification({
      //   status:'success' ,
      //   title:'Success!',
      //   message:'sent cart data succesfull'
      // }))
    // }

    if(isInitial){
      isInitial=false
      return
    }
    // sendCartData().catch(error=>{
      // dispatch(uiActions.showNotification({
      //   status:'error' ,
      //   title:'Error!',
      //   message:'sending cart data failed'
      // }))
    // })
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  },[cart,dispatch])

  return (<Fragment>
    {notification && <Notification status={notification.status}
     title={notification.title} 
     message={notification.message}/>}
     <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  </Fragment>
   
  );
}

export default App;
