import {useNavigate} from "react-router-dom";
import MainSection from '../components/home/MainSection.tsx'
import InvestSection from "../components/home/InvestSection.tsx";
import FeatureSection from "../components/home/FeatureSection.tsx";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            {/* Main Section */}
            <MainSection onClick={() => navigate('/checklist')}/>

            {/* Invest Section */}
            <InvestSection/>

            {/* Features Section */}
            <FeatureSection/>
        </>
    );
};

export default Home;