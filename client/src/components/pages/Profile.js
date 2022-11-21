import React from 'react';
import '../../styles/Profile.css';
import sampleProfile from '../../assets/sampleProfile.jpg'

export default function Profile() {
  return(
    <div className='container-fluid' id="profile">
      <div className='row'>
        <div className='col-lg-4 text-center'>
          <img className="img-fluid" src={sampleProfile}/>
        </div>
        <div className='col-lg-8'>
          <h1>Sample Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h1>Contact:</h1>
          <div id='contact'>
          <a href="https://github.com/johnathanmann" target="_blank"><i className="fab fa-github-square fa-3x p-2"> </i></a>
          <a href="https://www.linkedin.com/in/johnathan-mann-03548b240/" target="_blank"><i className="fa-brands fa-linkedin fa-3x p-2"></i></a>
          <a href="mailto:johnathan.mnn@gmail.com" target="_blank"><i className="fas fa-envelope fa-3x p-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
