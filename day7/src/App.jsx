import "./App.css";
// import Persons from "./components/Persons";
// import Boxes from "./components/Boxes";
import Counter from "./components/Counter";

// HTML 태그를 Return하는 파일을 jsx라고 함
function App() {
  // [변수, set함수] = useState(초기값);
  // csr: Client Side Render / ssr: Server Side Render

  return (
    <div className="App">
      <Counter />
      {/* <Persons />
      <Boxes /> */}
    </div>
  );
}

export default App;
