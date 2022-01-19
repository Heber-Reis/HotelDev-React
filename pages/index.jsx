import Duvida from "../src/components/Duvida/Duvida";
import Header from "../src/components/Header/Header";
import MainInfo from "../src/components/MainInfo/MainInfo";

function HomePage () {
  return(
    <div>
      <Header/>
      <MainInfo/>
      <Duvida/>
    </div>
  )
}

export default HomePage;