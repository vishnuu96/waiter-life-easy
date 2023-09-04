import React,{useState} from 'react'
import InputOrder from './components/InputOrder'
import OrderList from './components/OrderList'

const App = () => {
const [ordersArray, setOrdersArray] = useState([])
const addOrderHandler=(order)=>{
  setOrdersArray(order)
  // console.log(order)
}

  return (
    <div>
      <InputOrder onAddOrder={addOrderHandler}/>
      <OrderList orders={ordersArray}/>
    </div>
  )
}

export default App
