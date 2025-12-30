import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import HomeCarousel from "./Pages/Home/HomeCarousel";
import LoginPage from "./Pages/LoginPage/LoginPage";
function App() {
  return (
    <>
      <Header />
      <Home></Home>
      {/* <LoginPage></LoginPage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
