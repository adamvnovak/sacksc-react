import logo from './redhackysack.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h4></h4>        <h4></h4>
        <h4></h4>
        
        <img src={logo} alt="logo" className='App-logo'/>
        <h2>
          Happy Sack
        </h2>
        <h3>
        The good vibes hacky sack club at USC
        </h3>
        <p>
        Every Monday, 5pm at McCarthy Quad
        </p>
        <p>
        Text Adam at (615) 975-4270 if you have any questions
        </p>

        <h4></h4>
        <h4></h4>
      </header>

      <header className="App-footer">
        {/* <Link  to={{pathname: '/faq'}}>learn more</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >join the groupme</a> */}
      </header>
    </div>
  );
}

export default LandingPage;
