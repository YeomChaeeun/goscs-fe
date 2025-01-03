import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            Home
            <Button onClick={() => navigate('/checklist')}>투자성향 파악하기</Button>
        </div>
    );
};

export default Home;