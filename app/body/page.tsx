import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faQuestionCircle, faClock, faTruck, faLeaf,} from "@fortawesome/free-solid-svg-icons"; 


const Homes = () => {
    return (
       
        <div className="ml-40 mt-40 bg-white-500 ">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <h2 className="font-bold text-6xl text-orange-500">All Fast Food is <br/> Available at Foodle</h2>
                <p className="font-bold text-2xl ">We Are Just A Click Away <br/> When You Crave For Delicious Food</p>
                <button className="buy-button">    Buy Now</button>
                <button className="how-to-order-button">     How To Order</button>
            </div>
            <div className="image">
            <img src={"/Burger1.png"} alt={"icon"} className={"W-1/2"}/>

            </div>
            </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 mt-40  mr-40">
        <div>
            <h2 className="">  Fast Deliver</h2>
            <p> The Food will be delivered to <br/> your home within :2 hours of  <br/>  your ordering</p>

        </div>
        <div>

        <h2>    Fresh Food</h2>
        <p>Your Food will be delivered  <br/> 100% fresh to your home We  <br/> do not deliver Store food</p>
     

        </div>
        <div>

        <h2>  Free Delivery</h2>
            <p>Your food delivery is <br/> absolutely free No Cost <br/> Just Order And Enjoy</p>
        </div>
        </div>
        </div>

       
    );
}

export default Homes;
