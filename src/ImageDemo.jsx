import React from "react";
// import logo1 from "./image/logo1.png";
const ImageDemo = () => {
  return (
    <>
      <div>Images Demo</div>
      {/* <img src={logo1} height="200" width="200" /> */}
      {/* second way */}
      {/* <img
        src={require("./image/logo2.png").default }
        height="200"
        width="200"
      /> */}
       {/* third way when image in public folder */}
      <img src="image/logo1.png" width="200" height="200" alt="" />
    </>
  );
};

export default ImageDemo;
