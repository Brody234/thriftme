"use client"
import Image from "next/image";
import shirt1 from "../images/shirt1.webp"
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [creditCard, setCreditCard] = useState(false)
  return (
    <div>
      <h1>Welcome To ThriftMe</h1>
      <FeaturedItem src = {shirt1} creditCard = {()=>setCreditCard(true)} />
      {
        creditCard && 
        <div style = {{position: 'absolute'}}>
          <p>Enter your credit card number</p>
          <input></input>
          <p>CVV/CVC</p>
          <input></input>
          <p>Expiration Date</p>
          <input></input>
        </div>
      }
    </div>
  );
}

function FeaturedItem({src, txt, creditCard}){
  const popUp = () =>{
    creditCard()
  }
  return(
  <div style = {{backgroundColor: '#779988', display: "inline-block", borderRadius: '10px', padding: '20px', margin: '30px'}}>
    <Image src = {shirt1} height = "300" ></Image>
    <div style = {{flexDirection: 'column', display: 'flex', alignContent: 'center', alignItems: 'center'}}>
      <p>Fight Club T Shirt: $10</p>
      <button style = {{backgroundColor: 'orange', border: 'none', outline: 'none', padding: '3px', borderRadius: '3px', marginTop: '10px', fontSize: '20px'}} onClick = {popUp}><p>Buy Now</p></button>
    </div>
  </div>)
}
