import "./splashscreen.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Splashscreen = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="splash-container">
      <div className="splash-card">

        <img src={logo} alt="My Budget Logo" className="logo" />

        <h1 className="title">
          <span className="text-white">MY</span>{" "}
          <span className="text-gold">BUDGET</span>
        </h1>

        <p className="description">
          Experience the gold standard of personal finance.
          Track, save, and master your wealth with elegance.
        </p>

        <button className="start-btn" onClick={onStart}>
          Unlock Your Future
        </button>

      </div>
    </div>
  );
};

export default Splashscreen;