import "./SideDrawer.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    // chariot cart navbar
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
    // End chariot cart navbar

    return (
        <div className={sideDrawerClass.join(" ")}>

            <ul className="sidedrawer__links topBotomBordersIn" onClick={click}>

                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/product">Collection</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>

        </div>
    )
}

export default SideDrawer
