import React from 'react';
import './CommandList.css';
import CartCommande from './CartCommande';

const CommandList = ({commandList}) => {
    var sum=[]
   const list = ()=>{
       var result=[]
       var result2=[]
       const keysSet=new Set()
       commandList.map(elm=>{
       keysSet.add(elm.cartId)
        return true
       })
       keysSet.forEach(elm=>result.push(elm))
      
       result.map((el,i)=>{
            result2.push(commandList.filter(elm=>elm.cartId===el))
            return true
       })
       result2.map(elm=>{
           sum.push(elm.reduce((acc,cv)=>acc+(cv.qty*cv.price),0))
           return true
       })
       console.log(sum)
       return(result2)

   }
    return (
        <div>
            {list().map((el,i)=>{
                return <>
               {/* <div  style={{border:'solid black 1px', margin:"3px"}} > */} 
             <div className="CommandList"> 
               <div className="commandList__ligne">
                   <h5>{`Commande num : ${i+1}`}</h5>
                  {/*  <h6>Total: {sum[i]}</h6> */}
                </div> 
            
                {el.map(elm=><CartCommande key={elm._id} command={elm} />)}<h6 className="total">Total: {sum[i]}</h6>
                </div>  
                </>
            })}
            {/* {list().map((el,i) => 
             commandList.filter(elm=>elm.cartId===el).map((commands)=><><h3>{`commande numero : ${el}`}<CartCommande key={commands._id} command={commands} /></h3></>  )
               
           )   
            
            }  */}
            
         
        </div>
    )
}

export default CommandList
