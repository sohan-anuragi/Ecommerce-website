import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ForgetPage from "./Pages/ProfilePages/ForgetPage";
import Home from "./Pages/Home/Home";
import HomeCarousel from "./Pages/Home/HomeCarousel";
import LoginPage from "./Pages/ProfilePages/LoginPage";
import SignUpPage from "./Pages/ProfilePages/SignUp";
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
