import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="ml-40 mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2  ">
      <h1 className="font-bold text-4xl"  >
        Best <span className="    font-bold text-4xl text-orange-500   ">delivered </span> delivered
        <br /> Categories
      </h1>
      <p className="category-paragraph">
        Here Are Some Of Our Best Distributed
        <br /> Categories. You Can Place Orders Here.
      </p>
      </div>
      <div className="      grid grid-cols-1 md:grid-cols-3 mt-40   ">
        <div>
        <img src={"/burger2.png"} alt={"icon"} className={"W-1/2"}/>

<p className="font-bold text-2xl">chicken Burger</p> 
    <p  className="font-bold text-2xl">order Now</p>   
       </div>
       <div>
       <img src={"/burger3.png"} alt={"icon"} className={"W-1/2"}/>


       <p className="font-bold text-2xl">chicken Pizza</p> 
    <p  className="font-bold text-2xl">order Now</p>   
       </div>
       <div>
       <img src={"/burger4.png"} alt={"icon"} className={"W-1/2"}/>

       <p className="font-bold text-2xl">chicken fries</p> 
    <p  className="font-bold text-2xl">order Now</p>   
       </div>
      </div>
    </div>
  );
};

export default Category;
