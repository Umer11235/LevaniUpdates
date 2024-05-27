"use client";
import Icons from "@/components/header/customIcons";
import Image from "next/image";
import { ICartCard } from "./interface";
import "./style/style.css";
import React from "react";
const CartCard = (props: ICartCard) => {
    const [qty, setqty] = React.useState<number>(0);

    const AddToCart = (type: string) => {
        setqty((prevQty) => {
            if (type === "p") { 
                return prevQty + 1;
            } else {
                if (prevQty > 0) {
                    return prevQty - 1;
                } else {
                    return prevQty;
                }
            }
        });
    };
    
    return (
        <div className="cart-card">
            <div className="cart-card-in1">
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={props.image}
                    alt=""
                />
            </div>
            <div className="cart-card-in2">
                <div className="cart-card-in-bx">
                    <h1>{props.title}</h1>
                    <div>
                        <Icons icon="play" />
                    </div>
                </div>
                <ul>
                    {props.recipies.map((x, i) => (
                        <li key={i}>{x}</li>
                    ))}
                </ul>
                <h4>$ {props.price}</h4>

                {qty > 0 ? (
                    <div
                    className="btn-cart-ad"
                        onClick={() => {
                            AddToCart("m");
                        }}
                    >
                        <button>
                            <Icons icon="minus" />
                        </button>
                        <span>{qty}</span>
                        <button
                            onClick={() => {
                                AddToCart("p");
                            }}
                        >
                            <Icons icon="plus" />
                        </button>
                    </div>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                AddToCart("p");
                            }}
                            className="my-2 pos-cst-1"
                        >
                            <span>
                                <Icons icon="cart" />
                            </span>
                            Add to Cart
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartCard;
