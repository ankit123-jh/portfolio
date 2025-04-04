import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MyContact from "../MyContact";
import MySkills from "../MySkills";
import Footer from "../Footer";



export default function Home() {  
    return(
        <>
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyPortfolio/>
            <MyContact/>
            <Footer/>
        </>
    );
}