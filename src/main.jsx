import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App1 from "./App1.jsx";
import App from "./App.jsx";
import "./index.css";
import FormControlFunc from "./FormControlFunc.jsx";
import MultiInput from "./multiInput.jsx";
import MultiCheckbox from "./multiCheckbox.jsx";
import HookuseRef from "./HookuseRef.jsx";
import HookuseRef2 from "./HookuseRef2.jsx";
import ArrayInDropdown from "./Components/array-in-dropdown.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    {/* <ArrayInDropdown /> */}
    {/* <HookuseRef2></HookuseRef2> */}
    <App/>
  </>
  //{/* <App1 /> */}
  // {/* <FormControlFunc/> */}
  // {/* <MultiInput/> */}
  // {/* <MultiCheckbox/> */}
  // {/* <HookuseRef/> */}
  // </StrictMode>
);
