import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    console.log(basket);
    return (
        <nav className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img> 
            </Link>  

            <div className="header_search">
                <input type="text" className="header_searchInput" />  
                <SearchIcon className="header_searchIcon" />  
            </div>

            <div className="header_nav">
                {/* link 1 */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Hello</span>
                        <span className="header_option2">Sign In</span>
                    </div>
                </Link>
                {/* link 2 */}
                <Link className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Returns</span>
                        <span className="header_option2">& Orders</span>
                    </div>
                </Link>
                {/* link 3 */}
                <Link className="header_link">
                    <div className="header_option">
                        <span className="header_option1">Your</span>
                        <span className="header_option2">Prime</span>
                    </div>
                </Link>
                {/* link 4 / basket */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_option2 header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
