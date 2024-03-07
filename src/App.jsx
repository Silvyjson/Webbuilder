import DealsCard from "./components/DealsCard"
import Footer from "./components/FooterSection"
import HeaderSection from "./components/HeaderSection"
import HostingCardData from "./components/HostingCards"
import NavSection from "./components/NavSection"
import NewsLetter from "./components/NewsLetter"

function App() {

  return (
    <>
      <NavSection />
      <div className="main-section">
        <HeaderSection />
        <HostingCardData/>
        <DealsCard/>
        <NewsLetter/>
      </div>
      <Footer/>
    </>
  )
}

export default App
