import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchCartData=(cart)=>{
  return async (dispatch)=>{
    const fetchData=async ()=>{
      const response = await fetch('https://expense-tracker-a2833-default-rtdb.firebaseio.com/cart.json',{
        method:'GET',
        body:JSON.stringify(cart)
      })

      if(!response.ok){
        throw new Error('could not fetch cart data')
      }
      const data= await response.json()
      return data
    }
    try{
      const cartData=await fetchData()
      dispatch(cartActions.replaceCart(cartData))
    }catch(error){
      dispatch(uiActions.showNotification({
        status:'error' ,
        title:'Error!',
        message:'fetching cart data failed'
      }))
    }
  }
}

export  const sendCartData=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiActions.showNotification({
            status:'pending' ,
            title:'sending...',
            message:'sending cart data'
          }))

          const sendRequest=async()=>{
            const response= await fetch('https://expense-tracker-a2833-default-rtdb.firebaseio.com/cart.json',{
            method:'PUT',
            body:JSON.stringify(cart)
          })
    
          if(!response.ok){
            throw new Error('sending cart data failed')
          }
          }

          try{
            await sendRequest()
            dispatch(uiActions.showNotification({
                status:'success' ,
                title:'Success!',
                message:'sent cart data succesfull'
              }))
          }catch(error){
            dispatch(uiActions.showNotification({
                status:'error' ,
                title:'Error!',
                message:'sending cart data failed'
              }))
          }
    }
}