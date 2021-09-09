import "./Navbar.css"; 
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import chariotLogo from "../Images/chariotLogo.png"

const Navbar = ({ click }) => {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  // chariot cart navbar
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  // End chariot cart navbar



  return (
    <nav className="navbar">
      <div className="navbar__logo2 ">
        <div className="bd">
          <div class="sign sign1 words word-1" >
           
            <span class="fast-flicker1 ">m</span>
            <span class="fast-flicker1 ">a</span>
            <span class="fast-flicker1 ">y</span>
            <span class="fast-flicker1 ">c</span>
            <span class="fast-flicker1 ">o</span>
            <span class="fast-flicker1 ">l</span>
            <span class="fast-flicker1 ">l</span>
            <span class="fast-flicker1 "><img src={chariotLogo} alt="logo" style={{width:"50px" ,height:"50px", marginTop:"-10px"}}/></span>
           {/*  <div className="part1">
             
              <span class="flicker1 ">  In &nbsp;</span>
            </div>
            <div className='part2 '>
              <span>Shopping</span>
            </div> */}
          </div>

        </div>
      </div>

      <ul className="navbar__links topBotomBordersIn ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Collection</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>  </ul>
      <div className=" navSign">
        <p>
          {!auth.isAuth &&
            <Link to="/login" className="signNav">
              Sign in
            </Link>
          }

          {auth.user && auth.user.role === 'admin' &&
            <Link to="/profileAdmin" className="link2"><h1 style={{  color:"#ff65bd"}}> {auth.user && auth.user.firstname}</h1></Link>
          }  {auth.user && auth.user.role === 'user' && 
            <Link to="/profile" className="link2"><h1 style={{ color:"#ff65bd"  }}> {auth.user && auth.user.firstname}</h1></Link>
          }
          
        </p>

        {auth.isAuth &&
          <p>
            <span onClick={() => dispatch(logout())} ><i class="fas fa-sign-out-alt"></i></span>
          </p>}
          
        <p className="navCount">
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Panier <span className="cartlogo__badge"> {getCartCount()} </span>
            </span>
          </Link>
        </p>
      </div>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
