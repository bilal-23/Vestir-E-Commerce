import App from "./App.tsx";
import "./index.css";
import "./typography.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop.ts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Slide } from "react-toastify";
import ContextContainer from "./components/Context/ContextContainer.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContextContainer>
      <ScrollToTop />
      <Toater />
      <App />
    </ContextContainer>
  </BrowserRouter>
  // </React.StrictMode>
);

function Toater() {
  return (
    <ToastContainer
      transition={Slide}
      position="top-right"
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      className={"toast-container"}
      limit={3}
    />
  );
}
