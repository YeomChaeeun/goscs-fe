import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const guideList = [1, 2, 3, 4];
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={() => navigate('/checklist')}>투자성향 파악하기</Button>
            <br />
            {guideList.map((value) => {
                return <Link to={`/guide/${value}`} style={{display:"block"}}>가이드 {value}</Link>
            })}
        </div>
    );
};

export default Home;