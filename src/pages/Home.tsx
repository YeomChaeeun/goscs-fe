import {useNavigate} from "react-router-dom";
import MainSection from "../components/home/MainSection.tsx";
import FeatureSection from "../components/home/FeatureSection.tsx";
import {useResetRecoilState} from "recoil";
import {checklistState} from "../recoil/atoms/assetAtom.ts";

const Home = () => {
  const resetList = useResetRecoilState(checklistState);

  const navigate = useNavigate();
  return (
    <>
      {/* Main Section */}
      <MainSection
        onClick={() => {
          navigate("/checklist");
          resetList();
        }}
      />

      {/* Invest Section */}
      {/*<InvestSection />*/}

      {/* Features Section */}
      <FeatureSection />
    </>
  );
};

export default Home;
