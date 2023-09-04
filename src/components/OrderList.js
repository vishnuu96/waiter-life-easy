import React,{useState,useEffect} from 'react'

const OrderList = (props) => {
 const [Table1, setTable1] = useState([])
 const [Table2, setTable2] = useState([])
 const [Table3, setTable3] = useState([])

let Object={
    
    dish:props.orders.dish,
    price:props.orders.price,
    table:props.orders.table,
}

let localObject=JSON.stringify(Object)
localStorage.setItem(props.orders.id,localObject)

useEffect(() => {
    console.log('useeffect')
  if(props.orders.table==='Table1'){
    console.log("useeffect1")
    setTable1([...Table1,props.orders])
    console.log(...Table1)
  }
  if(props.orders.table==='Table2'){
    console.log("useeffect2")
   
    setTable2([...Table2,props.orders])
  }
  else if(props.orders.table==='Table3'){
    console.log("useeffect3")
    setTable3([...Table3,props.orders])
  }
}, [props.orders.table]) 



const T1deleteHandler=(key)=>{
    setTable1(()=>{
        return Table1.filter(item=>
            parseInt(item.id)!==key
          )
    
      })
    // setTable1([...Table1])2   
}
const T2deleteHandler=(id)=>{
    // localStorage.removeItem(id)
        // const index= Table2.findIndex(id)
        // Table2.splice(index,1)
        // setTable2([...Table2]) 
        setTable2(()=>{
            return Table2.filter(item=>
                parseInt(item.id)!==id
              )
        
          })  
}
const T3deleteHandler=(key)=>{
    // localStorage.removeItem(key)
    // const index= Table3.findIndex(key)
    // Table3.splice(index,1)
    // setTable3([...Table3])  
    setTable3(()=>{
        return Table3.filter(item=>
            parseInt(item.id)!==key
          )
    
      })  
}

  return (
    <div>
      <h3>Orders</h3>
            <div id="Table-1">Table 1</div>
            {Table1.map((i)=>(<li key={parseInt(i.id)}>{i.id}-{i.dish}-{i.price}-{i.table}<button onClick={()=> T1deleteHandler(parseInt(i.id))}>Delete</button></li>)) }
            <div id="Table-2">Table 2</div>
            {Table2.map((i)=>(<li key={parseInt(i.id)}>{i.id}-{i.dish}-{i.price}-{i.table}<button onClick={()=>T2deleteHandler(parseInt(i.id))}>Delete</button></li>)) }
            <div id="Table-3">Table 3</div>
            {Table3.map((i)=>(<li key={parseInt(i.id)}>{i.id}-{i.dish}-{i.price}-{i.table}<button onClick={()=>T3deleteHandler(parseInt(i.id))}>Delete</button></li>)) }

    </div>
  )
}

export default OrderList


