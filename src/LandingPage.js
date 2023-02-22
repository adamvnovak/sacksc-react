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
          Sack SC
        </h2>
        <p>
          The official hacky sack club at USC
        </p>

        <h4></h4>
        <h4></h4>

        <button
            type="button"
            className='glow-on-hover'
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://forms.gle/WMxknWmWZ77gpjv16';
              }}
        > 
        Spring 2023 Interest Form
        </button>
      </header>

      <header className="App-footer">
        {/* <Link  to={{pathname: '/faq'}}>learn more</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >join the groupme</a> */}
      </header>
    </div>
  );
}

export default LandingPage;
