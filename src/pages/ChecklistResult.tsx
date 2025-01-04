import {recommendations} from "../data/recommendations.ts";
import {Link} from "react-router-dom";
import {useRecoilState} from "recoil";
import {checklistState} from "../recoil/atoms/assetAtom.ts";
import {assetAllocation} from "./Checklist.tsx";
import {theme} from "../App.tsx";

const ChecklistResult = () => {
    const [state, setState] = useRecoilState(checklistState);
    return (
        <div>
            {state.profile && (
                <div style={{padding: "20px", fontFamily: "Arial, sans-serif", color: theme.palette.text.primary}}>
                    <p>당신의 투자 성향은: {state.profile}</p>
                    <h2>추천 종목</h2>
                    <ul>
                        {recommendations[state.profile ].map((item) => (
                            <li key={item.id}>
                                <Link to={`/stockdetail/${item.id}`}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <h2>자산 분배 추천</h2>
                    <ul>
                        {Object.entries(assetAllocation[state.profile]).map(
                            ([asset, percentage]) => (
                                <li key={asset}>
                                    {asset}: {percentage}%
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ChecklistResult;