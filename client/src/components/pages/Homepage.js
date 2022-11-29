import React from 'react';
import '../../styles/Homepage.css';
import jumbotron1 from '../../assets/jumbotron1.png'
import jumbotron2 from '../../assets/jumbotron2.png'

export default function Homepage({ currentPage, handlePageChange }) {
  return (
    <div className='container-fluid'>
    <div className="jumbotron jumbotron-fluid">
      <div className="row">
    <div className="col-lg-6">
    <img className="img-fluid" id="jumbotron2" src={jumbotron2}/>
    <div id="mobile">
      <h1>Looking to share some code?</h1>
    <img className="img-fluid" id="jumbotron1" src={jumbotron1}/>
    </div>
    </div>
    <div className=" flex-column col-lg-6">
      <div id="computer">
      <h1>Looking to share some code?</h1>
  <p className="align-middle">Share your favorite reusable code snippets and<br/> connect with other developers.</p>
  <button type="button" className="btn btn-link">Get Started</button>
      </div>
      </div>
    </div>
</div>
</div>
  );
}
