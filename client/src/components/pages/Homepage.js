import React from 'react';
import '../../styles/Homepage.css';
import jumbotron1 from '../../assets/jumbotron1.png'
import jumbotron2 from '../../assets/jumbotron2.png'

export default function Homepage({ currentPage, handlePageChange }) {
  return (
    // Depending on screen size a different jumbotron will display
    <div className='container-fluid'>
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid" id="jumbotron1" src={jumbotron1}/>
          <div id="mobile">
            <h1>Looking to share some code?</h1>
            <img className="img-fluid" id="jumbotron2" src={jumbotron2}/>
          </div>
        </div>
        <div className="flex-column col-lg-6" id="computer">
          <div id="computer">
            <h1>Looking to share some code?</h1>
            <p className="align-middle">Share your favorite reusable code snippets and<br/> connect with other developers.</p>
            <button type="button" className="btn">Get Started</button>
          </div>
        </div>
    </div>
</div>
  );
}
