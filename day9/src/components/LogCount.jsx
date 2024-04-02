import { useRecoilValue } from "recoil";
import { countLogState } from "../store/countState";

const LogCount = () => {
  const logs = useRecoilValue(countLogState);
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>date</th>
          <th>count</th>
          <th>number</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(({ number, date, count }, i) => (
          <tr key={i}>
            <td>{date}</td>
            <td>{count}</td>
            <td>{number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogCount;
