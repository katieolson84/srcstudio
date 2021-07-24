import React from 'react';
import './App.css';
import styled from 'styled-components';

// Images
import logo from './images/scr-logo-purple.png';
import bottom from './images/bottom-shape.png';
import top from './images/top-shape.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';


function App() {
  return (
    <StyledContainer>
      <div className="container">
        <img className="top" src={top} alt="graphic" />
        <div className="content">
          <img className="logo" src={logo} alt="logo" />
          <h1>coming soon</h1>
          <div className="social-media">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/srcstudio.io/">
              <img src={instagram} alt="instagram icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/srcstudio">
              <img src={twitter} alt="twitter icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/src-studio-utah/about/">
              <img src={linkedin} alt="linkedin icon" />
            </a>

          </div>
        </div>
        <img className="bottom" src={bottom} alt="graphic" />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  width: 100%;

  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: absolute;
    left:0;
    right: 0;
    top:50%;
    bottom: 50%;
    z-index: 10;
    width:100%;
    .logo{
      width: 170px;
    }
    h1{
      font-size: 4.5rem;
      line-height: 90%;
      letter-spacing: -2%;
      font-family: neuzeit-grotesk, sans-serif;
      color: #5A48F4;
      padding: 1rem;
    }
  }

  .social-media{
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    a{
      img{
        width: 1.2rem;
      }
    }
  }
  .top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 90%;
    z-index: 1;
  }

  @media only screen and (min-width: 768px){
    
    .top{
    width: 70%;
    right: 0;
    left: auto;
  }
  .bottom{
    width: 60%;
  }

  .social-media{
    width: 20%;
  }

  .content{
    h1{
      font-size: 6.5rem;
      
    }
  }

  }

  @media only screen and (min-width: 1020px){
    .top{
    width: 50%;
  }

  .bottom{
    width: 40%;
  }
  .social-media{
    width: 15%;
  }

  .content{
    h1{
      font-size: 9rem;
      
    }
  }

  
`

export default App;

