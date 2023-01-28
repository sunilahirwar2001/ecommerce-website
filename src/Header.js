// import React from 'react';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo">
//         <img src="https://www.flipkart.com/flipkart-logo.png" alt="Flipkart logo" />
//       </div>
//       <div className="search-bar">
//         <input type="text" placeholder="Search for products, brands and more" />
//         <button>Search</button>
//       </div>
//       <div className="user-actions">
//         <button>Sign In</button>
//         <button>Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import React, { useState } from 'react';

// const Header = () => {
//   const [searchText, setSearchText] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Searching for ${searchText}`);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     console.log('Logged in successfully');
//   };

//   const handleSignUp = () => {
//     console.log('Redirecting to sign up page');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     console.log('Logged out successfully');
//   };

//   return (
//     <div className="header">
//       <div className="logo">
//         <img src="https://www.flipkart.com/flipkart-logo.png" alt="Flipkart logo" />
//       </div>
//       <form onSubmit={handleSearchSubmit}>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for products, brands and more"
//             value={searchText}
//             onChange={handleSearch}
//           />
//           <button>Search</button>
//         </div>
//       </form>
//       <div className="user-actions">
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleSignUp}>Sign Up</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Header = () => {
//   const [searchText, setSearchText] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleSearch = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Searching for ${searchText}`);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     console.log('Logged in successfully');
//   };

//   const handleSignUp = () => {
//     console.log('Redirecting to sign up page');
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     console.log('Logged out successfully');
//   };

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     console.log(`${product.name} added to cart`);
//   };

//   return (
//     <div className="header">
//       <div className="logo">
//         <img src="https://www.flipkart.com/flipkart-logo.png" alt="Flipkart logo" />
//       </div>
//       <form onSubmit={handleSearchSubmit}>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for products, brands and more"
//             value={searchText}
//             onChange={handleSearch}
//           />
//           <button>Search</button>
//         </div>
//       </form>
//       <div className="user-actions">
//         {isLoggedIn ? (
//           <button onClick={handleLogout}>Logout</button>
//         ) : (
//           <>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleSignUp}>Sign Up</button>
//           </>
//         )}
//       </div>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>
//             Add to Cart</button>
// </div>
// ))}
// </div>
// <div className="cart">
// <h3>Cart</h3>
// {cart.map((product) => (
// <div key={product.id} className="cart-item">
// <img src={product.image} alt={product.name} />
// <h4>{product.name}</h4>
// <p>{product.price}</p>
// </div>
// ))}
// </div>
// </div>
// );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
      .then((response) => {
        setProducts(response.data);
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
    setCart([...cart, product]);
    console.log(`${product.name} added to cart`);
  };

  return (
    <div className="header">
      <div className="header-row">
        <div className="logo">
          <img src="https://www.flipkart.com/flipkart-logo.png" alt="Flipkart logo" />
        </div>
        <form onSubmit={handleSearchSubmit}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              value={searchText}
              onChange={handleSearch}
            />
            <button>Search</button>
          </div>
        </form>
      </div>
      <div className="header-row">
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
      </div>
      <div className="header-row">
       
        <div className="products" style={{display:"grid", gridTemplateColumns:"2fr 2fr 2fr 2fr"}}>
          {products.map((product) => (
            <div key={product.id} className="product" >
              <img style={{height: "200px",width:"200px"}}  src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
<div className="cart">
<h3>Cart</h3>
{cart.map((product) => (
<div key={product.id} className="cart-item">
<img  style={{height: "200px",width:"200px"}} src={product.image} alt={product.name} />
<h4>{product.name}</h4>
<p>{product.price}</p>
</div>
))}
</div>
</div>
</div>
);
};

export default Header;
