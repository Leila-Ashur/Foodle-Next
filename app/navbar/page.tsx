import React from "react";

const Navbar = () => {
    return (
        <nav className="text-black p-6 flex items-center justify-between">
            <h3 className="font-bold text-3xl text-orange-500">Foodle</h3>
            <ul className="flex space-x-20 text-2xl">
                <li> <a href="/home">Home</a> </li>
                <li> <a href="/offer">Offer</a> </li>
                <li> <a href="/service">Service</a> </li>
                <li> <a href="/offer">Menu</a> </li>
                <li> <a href="about us">About Us</a> </li>
            </ul>
            <ul className="grid grid-cols-1 md:grid-cols-2">
                <li> <a href="login">Login</a> </li>
                <li className="sign"> <a href="sign up">Sign Up</a> </li>
            </ul>
        </nav>
    );
}

export default Navbar;
