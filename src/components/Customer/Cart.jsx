
import React, { useState } from 'react';
import { Button } from "@chakra-ui/react";
import SuitImage1 from '../../assets/images/rentsuits/caremal suit/1.webp';
import SuitImage7 from '../../assets/images/rentsuits/black paisley suit/1.webp';
import SuitImage13 from '../../assets/images/rentsuits/burgandy strech/1.webp';


const Cart = () => {
    // Sample data for cart items (you can replace this with your data)

    const [cartItemsArray, setCartItems] = useState([]);

    // Functions to add and remove items from the cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };
    const cartItems = [
        {
            id: 1,
            name: "Clarks Men's Tilden Cap Oxford",
            image: SuitImage1,
            size: "XL",
            quantity: 2,
            price: "Rs 25000",
        },
        {
            id: 2,
            name: "Nike Air Max 2019",
            image: SuitImage7,
            size: "L",
            quantity: 2,
            price: "Rs 15000",
        },
        {
            id: 2,
            name: "Clarks Men's Tilden Cap Oxford",
            image: SuitImage13,
            size: "XL",
            quantity: 2,
            price: "Rs 17500",
        },
    ];

    return (
        <div className="flex items-start flex-wrap bg-white w-full h-screen overflow-auto">
            <div className="flex flex-col flex-wrap items-center rounded-2xl shadow-xl bg-slate-100 absolute my-10 w-full">
                <span className=" text-xl font-bold text-black p-1">Cart Items</span>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 w-full">
                    <div className="rounded-lg md:w-2/3">
                        {cartItems.map((item) => (
                            <div key={item.id} className="relative">
                                <Button
                                    className="absolute top-2 right-2"
                                    rounded={"lg"}
                                    color={"white"}
                                    bgColor={"black"}
                                    size="sm"
                                    _hover={{
                                        bg: "red",
                                        color: "black",

                                    }}
                                    onClick={() => removeItemFromCart(item.id)}
                                >
                                    X
                                </Button>
                                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                            <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                                        </div>
                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="text-sm">{item.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">Rs 134980</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">Rs 134980</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
