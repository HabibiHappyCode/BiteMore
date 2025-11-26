import Association from "./Association"
import Catering from "./Catering"
import Faq from "./Faq"
import LandingPage from "./LandingPage"

function Home() {
    return (
        <div className="bg-[#F5F5F5] ">
           <LandingPage />
           <Association />
           <Catering />
           <Faq />
        </div>
    )
}

export default Home
