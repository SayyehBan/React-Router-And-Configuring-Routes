import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>کتابخانه من</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/books" >
          کتاب ها
        </Link>{" "}
        <Link to="/about-us">
          درباره ما
        </Link>
      </nav>
    </div >
  );
};

export default App;
