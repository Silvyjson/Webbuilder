import DealsCard from "./components/DealsCard"
import Footer from "./components/FooterSection"
import HeaderSection from "./components/HeaderSection"
import HostingData from "./components/HostingCards"
import NavSection from "./components/NavSection"
import NewsLetter from "./components/NewsLetter"

function App() {

  return (
    <>
      <NavSection />
      <div className="main-section">
        <HeaderSection />
        <HostingData/>
        <DealsCard/>
        <NewsLetter/>
      </div>
      <Footer/>
    </>
  )
}

export default App
