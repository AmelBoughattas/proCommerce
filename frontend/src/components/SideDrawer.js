import "./SideDrawer.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const SideDrawer = ({ show, click }) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)


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
              Panier
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        <li className=" navSignsous">
          <p>
            {!auth.isAuth &&
              <Link to="/login" className="signNavsous">
                Sign in
              </Link>
            }

            {auth.user && auth.user.role === 'admin' &&
              <Link to="/profileAdmin" className="link2"><h1 style={{ color: "#ff65bd" }}> {auth.user && auth.user.firstname}</h1></Link>
            }  {auth.user && auth.user.role === 'user' &&
              <Link to="/profile" className="link2"><h1 style={{ color: "#ff65bd" }}> {auth.user && auth.user.firstname}</h1></Link>
            }

          </p>

          {auth.isAuth &&
            <p>
              <span onClick={() => dispatch(logout())} ><i class="fas fa-sign-out-alt sous"></i></span>
            </p>}


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
