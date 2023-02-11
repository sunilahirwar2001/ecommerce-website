
import Login from './Login';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';
import Modal from './Model';
import PaymentForm from './PaymentForm';
import Cart from './Cart';
const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
      .then((response) => {
        setProducts(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchText}`);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('Logged in successfully');
  };

  const handleSignUp = () => {
    console.log('Redirecting to sign up page');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log('Logged out successfully');
  };

  const handleAddToCart = (product) => {

    setCart([...cart,product]);
    console.log(cart);
    console.log(`${product.title} added to cart`);
  };

  const getSum = () =>{
    let sum=0;
        for (let i = 0; i < cart.length; i++) {
          sum += cart[i].price;
        }
       return sum;
  }

  return (
    
    <div className="header">
      <div className="App">
{/* <button
  className="openModalBtn"
  onClick={() => {
    setModalOpen(true);
  }}
>
  Open
</button> */}

{modalOpen && <Modal setOpenModal={setModalOpen} />}
</div>


      <div className="header-row">
        <div className="logo header-main" >
          <h1>Flipkart</h1>
   <img  src='https://logos-world.net/wp-content/uploads/2020/12/Flipkart-Logo-2011-500x281.png' />
            <input
              type="text" className='sss'
              placeholder="Search for products, brands and more"
              value={searchText}
              onChange={handleSearch}
            />
            <button>Search</button>
        
            <Login/>
        </div>
      
        {/* <form onSubmit={handleSearchSubmit}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchText}
              onChange={handleSearch}
            />
            <button>Search</button>
          </div>
        </form> */}
        
      </div>
      
      {/* <div className="header-row">
        <div className="user-actions">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleSignUp}>Sign Up</button>
            </>
          )}
        </div>
      </div> */}
      <div className="header-row">
       
        <div className="products" style={{display:"grid", gridTemplateColumns:"2fr 2fr 2fr 2fr"}}>
          {products.map((product) => (
            <div key={product.id} className="product" >
              <img style={{height: "200px",width:"200px"}}  src={product.image} alt={product.name}  />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                {/* <p  style={{fontSize:"5"}}>{product.description}</p> */}
                {/* <p  style={{fontSize:"7px"}}>{product.description}</p>
                 */}
                
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
<div className="cart">
<h3>Carts</h3>
{cart.map((product) => (
 
<div key={product.id} className="cart-item">
<img  style={{height: "200px",width:"200px"}} src={product.image} alt={product.name} />
<h4>{product.name}</h4>
<p>{product.price}</p>
</div>
))}
<p> TotalCartValue: {getSum()}</p>
</div>
</div>
{ getSum() > 0 ?
    <div className="App">
    <button
      className="openModalBtn"
      onClick={() => {
        setModalOpen(true);

        
      }}
    >
    Payment
    </button>
    { modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div> : ""
}

</div>
);
};


export default Header;
