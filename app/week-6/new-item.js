"use client"
import { useState } from "react";

export default function NewItem() {

    const[quantity,setquantity] = useState(0);
    function increment(){
        setquantity(quantity+1)
    }
    function decrement(){
        setquantity(quantity-1)
    }
    return (
        <main className="flex justify-center" >
            <div className=" bg-gray-500 w-40 h-10 flex justify-between">
            <h1 className="px-5 flex items-center bg-black w-16">{quantity}</h1>
            <button className={ ` w-12 ${quantity <= 0 ? "bg-gray-500" : "bg-fuchsia-500"}   `} disabled={quantity <= 0} onClick={decrement}>-</button>
            <button className ={`w-12 ${quantity >= 20 ? "bg-gray-500" : "bg-fuchsia-500"} `} disabled={quantity >= 20} onClick={increment}>+</button>
            </div>
        </main>
    );
}