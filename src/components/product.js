import { useState } from "react"
import "./product.css"

const Product = () => {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [third, setThird] = useState(0)
    const Products = [
        { id: 1, name: "Product-1", price: 100 },

        { id: 2, name: "Product-2", price: 200 },

        { id: 3, name: "Product-3", price: 300 }];

    return (
        <>
            <div className="container">
                <h2>Product</h2>
                <div className="box">

                    <span>{Products[0].name}</span>
                    <span>{Products[0].price}</span>
                    <button onClick={(e) => { setFirst(first + 1) }}>+</button>
                    {first}
                    <button onClick={(e) => { if (first > 0) { setFirst(first - 1) } }}>-</button>
                </div>
                <div className="box">

                    <span>{Products[1].name}</span>
                    <span>{Products[1].price}</span>
                    <button onClick={(e) => { setSecond(second + 1) }}>+</button>
                    {second}
                    <button onClick={(e) => { if (second > 0) { setSecond(second - 1) } }}>-</button>
                </div>
                <div className="box">

                    <span>{Products[2].name}</span>
                    <span>{Products[2].price}</span>
                    <button onClick={(e) => { setThird(third + 1) }}>+</button>
                    {third}
                    <button onClick={(e) => { if (third > 0) { setThird(third - 1) } }}>-</button>
                </div>
            </div>
            <div className="second">
                <h2>Cart</h2>
                <div className="side-box">
                    <span>{Products[0].name}</span>
                    <span>{first}</span>
                    <span>x</span>
                    <span>{Products[0].price}</span>
                    <br />
                    <span>{first * Products[0].price}</span>
                </div>
                    <div className="side-box">
                        <span>{Products[1].name}</span>
                        <span>{second}</span>
                        <span>x</span>
                        <span>{Products[1].price}</span>
                        <br />
                        <span>{second * Products[1].price}</span>
                    </div>
                    <div className="side-box">
                        <span>{Products[2].name}</span>
                        <span>{third}</span>
                        <span>x</span>
                        <span>{Products[2].price}</span>
                        <br />
                        <span>{third * Products[2].price}</span>
                    </div>
                    <div className="side-box">
                        <span>Total = {first * Products[0].price + second * Products[1].price + third * Products[2].price}</span>
                    </div>
                
            </div>

        </>
    )
}
export default Product