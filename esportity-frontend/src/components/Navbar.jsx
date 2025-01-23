import React from "react";
import logo from "../assets/logo.png";

const Navbar = (props) => {
  const {
    logo = logo,
    onSignup = () => {},
    onLogin = () => {}
  } = props;

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Esportify Logo" />
      </div>
      
      <div className="nav-links">
        <a href="#accueil">ACCUEIL</a>
        <a href="#events">EVENTS</a>
        <a href="#apropos">A PROPOS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <div className="auth-buttons">
        <button className="signup-btn" onClick={onSignup}>
          S'inscrire
        </button>
        <button className="login-btn" onClick={onLogin}>
          Connexion
        </button>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #1a2642;
          width: 100%;
        }

        .logo img {
          height: 80px;
          width: auto;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .nav-links a:hover {
          color: #87CEEB;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .signup-btn, .login-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-btn {
          background-color: #87CEEB;
          color: #1a2642;
        }

        .login-btn {
          background-color: #87CEEB;
          color: #1a2642;
        }

        .signup-btn:hover, .login-btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;