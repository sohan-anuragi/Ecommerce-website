import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ForgetPage from "./Pages/LoginPage/ForgetPage";
import Home from "./Pages/Home/Home";
import HomeCarousel from "./Pages/Home/HomeCarousel";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/LoginPage/SignUp";
function App() {
  return (
    <>
      <Header />
      <Home></Home>
      {/* <LoginPage></LoginPage> */}
      {/* <SignUpPage></SignUpPage> */}
      {/* <ForgetPage></ForgetPage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
