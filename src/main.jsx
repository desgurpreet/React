import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App1 from "./App1.jsx";
import "./index.css";
import FormControlFunc from "./FormControlFunc.jsx";
import MultiInput from "./multiInput.jsx";
import MultiCheckbox from "./multiCheckbox.jsx";
import HookuseRef from "./HookuseRef.jsx";
import HookuseRef2 from "./HookuseRef2.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <HookuseRef2></HookuseRef2>
  </>
  //{/* <App1 /> */}
  // {/* <FormControlFunc/> */}
  // {/* <MultiInput/> */}
  // {/* <MultiCheckbox/> */}
  // {/* <HookuseRef/> */}
  // {/* <App/> */}
  // </StrictMode>
);
