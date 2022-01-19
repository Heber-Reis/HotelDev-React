import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import MainInfo from "../src/components/MainInfo/MainInfo";

function HomePage () {
  return(
    <div>
      <Header/>
      <MainInfo/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;