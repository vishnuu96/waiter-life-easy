import React,{useState} from 'react'

const InputOrder = (props) => {

    const [Id, setId] = useState('')
    const [Price, setPrice] = useState('')
    const [Dish, setDish] = useState('')
    const [Table, setTable] = useState('')

    const IdChangeHandler=(event)=>{
        setId(event.target.value)
    }

    const priceChangeHandler=(event)=>{
        setPrice(event.target.value)
    }
    const DishChangeHandler=(event)=>{
        setDish(event.target.value)
    }
    const TableChangeHandler=(event)=>{
        setTable(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()
        const orderObj={
            id:Id,
            price:Price,
            dish:Dish,
            table:Table,  
        }
        // console.log(orderObj)
        props.onAddOrder(orderObj)
        setId('')
        setPrice('')
        setDish('')
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
          <label htmlFor="productId">Order Id</label>
          <input
            id="PrductId"
            type="number"
            value={Id}
            onChange={IdChangeHandler}
          />
          <label htmlFor="Price">Price </label>
          <input
            id="Price"
            type="number"
            value={Price}
            onChange={priceChangeHandler}
          />
          <label htmlFor="dish">Dish </label>
          <input
            id="dish"
            type="text"
            value={Dish}
            onChange={DishChangeHandler}
          />
            <label htmlFor="Table">Choose Table:</label>
                <select name="Table" id="Table" selected="---" onChange={TableChangeHandler}>
                    <option value="Table1">Table 1</option>
                    <option value="Table2">Table 2</option>
                    <option value="Table3" >Table 3</option>
                </select>
          <button type="submit">Add to bill</button>
        </form>
    </div>
  )
}

export default InputOrder

