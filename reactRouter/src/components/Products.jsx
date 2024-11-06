import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <h1>This is my product page</h1>
      </div>
      <nav style={{marginTop:20}}>
        {/* inside Link [to="shirts"] is RELATIVE PATH
        
        IF we <Link to='/products/shirts'>Shirts</Link> is ABSOLUTE PATH */}
        <Link to="shirts">Shirts</Link>
        <Link to="jeans">Jeans</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
