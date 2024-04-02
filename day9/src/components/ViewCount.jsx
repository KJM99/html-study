import { useRecoilState } from "recoil";
import { countState, countLogState } from "../store/countState";

const ViewCount = () => {
  const cnt = useRecoilState(countState);
  return <h1 className="text-9xl">{cnt}</h1>;
};

export default ViewCount;
