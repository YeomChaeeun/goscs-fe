import {useParams} from "react-router-dom";

const GuideDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>금융 가이드 {id}</h1>
        </div>
    );
};

export default GuideDetail;