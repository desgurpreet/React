// STATIC DECLARE import LazyComp1 from "./LazyComp1.jsx";
// import LazyComp2 from "./LazyComp2.jsx";
import React, { Suspense, lazy } from "react";
import FormValidation from "./FormValidation.jsx";
import FormikForm from "./FormikForm.jsx";
import FormikComponent from "./FormikComponent.jsx";
import ReactBootstrap from "./ReactBootstrap.jsx";
import GridBS from "./GridBS.jsx";
import ImageDemo from "./ImageDemo.jsx";
import CardBS from "./CardBS.jsx";
import Mynavbar from "./Mynavbar.jsx";
import BSCarousel from "./BSCarousel.jsx";
//DYNAMIC DECLARE
const LazyComp1 = lazy(() => import("./LazyComp1.jsx"));
const LazyComp2 = lazy(() => import("./LazyComp2.jsx"));

const App1 = () => {
  return (
    <div>
      <BSCarousel />
      {/* <Mynavbar/> */}
      {/* <ImageDemo/> */}
      {/* <CardBS /> */}
      {/* <GridBS/> */}
      {/* <ReactBootstrap/> */}
      {/* <FormikComponent/> */}
      {/* <FormikForm/> */}
      {/* <FormValidation/> */}
      {/* <LazyComp1 />
    <Suspense fallback={<div>Loading.....</div>}>
    <LazyComp2 />
    </Suspense> */}
    </div>
  );
};

export default App1;

// import React from "react";
// import Conditional1 from "./Conditional1";
// import Conditonal2 from "./Conditonal2";
// import ListRender from "./ListRender";

// const App1 = () => {
//   const name = "gs";
//   const age = 25;
//   let data;
//   if (name == "gs") {
//     data = <Conditional1 />; //element variable (data)
//   } else {
//     data = <Conditonal2 />;
//   }
//   return (
//     <div>
//       {data}
//       {/* //using && operator if name=="gs" true then h1 run  */}
//       {name == "gs" && <h1>I am Gurpreet</h1>}
//       {age >= 18 ? <h1>My age is {age}</h1> : <h1>My age is less than 18</h1>}
//       <ListRender />
//     </div>
//   );
// };

// export default App1;
