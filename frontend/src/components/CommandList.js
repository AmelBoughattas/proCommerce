import React from 'react';
import './CommandList.css';
import CartCommande from './CartCommande';
import chariotLogo from "../Images/chariotLogo.png"

const CommandList = ({ commandList }) => {
    var sum = []
    const list = () => {
        var result = []
        var result2 = []
        const keysSet = new Set()
        commandList.map(elm => {
            keysSet.add(elm.cartId)
            return true
        })

        keysSet.forEach(elm => result.push(elm))

        result.map((el, i) => {
            result2.push(commandList.filter(elm => elm.cartId === el))
            return true
        })
        result2.map(elm => {
            sum.push(elm.reduce((acc, cv) => acc + (cv.qty * cv.price), 0))
            return true
        })
        console.log(sum)
        return (result2)

    }
    return (
        <div className="containerCmd">
            {list().map((el, i) => {
                return <>
                    {/* <div  style={{border:'solid black 1px', margin:"3px"}} > */}
                    <div className="CommandList">
                        <div className="commandList__ligne">
                            <h5 /* className="pic" */> {` ${i + 1}`}</h5>

                            <img src={chariotLogo} alt="logo" style={{ width: "50px", height: "50px", marginTop: "-10px" }} />

                        </div>
                        <div>

                        {el.map(elm => <CartCommande key={elm._id} command={elm} />)}<h6 className="total">Total: {sum[i]}</h6>
                        </div>
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
