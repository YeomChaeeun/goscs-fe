import {useNavigate} from "react-router-dom";
import MainSection from "../components/home/MainSection.tsx";
import FeatureSection from "../components/home/FeatureSection.tsx";
import {useResetRecoilState} from "recoil";
import {checklistState} from "../recoil/atoms/assetAtom.ts";
import InvestSection from "../components/home/InvestSection.tsx";
import {useEffect} from "react";

const Home = () => {
  const resetList = useResetRecoilState(checklistState);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      resetList();
    }
  }, []);

  return (
    <>
      {/* Main Section */}
      <MainSection
        onClick={() => { navigate("/checklist") }}
      />

      {/* Invest Section */}
      <InvestSection />

      {/* Features Section */}
      <FeatureSection />
    </>
  );
};

export default Home;
