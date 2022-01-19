import Contact from "../src/components/Contact/Contact";
import Header from "../src/components/Header/Header";
import MainInfo from "../src/components/MainInfo/MainInfo";

function HomePage () {
  return(
    <div>
      <Header/>
      <MainInfo/>
      <Contact/>
    </div>
  )
}

export default HomePage;