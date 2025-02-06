import React from 'react';
import Navigation from '../navigations/navbar.js';
import Schemes_img from '../assets/img/category.avif';
import { Link } from 'react-router-dom';
import Footer from "../footer/footer.js";
import axios from 'axios';
function Schemes(){
  const [schemes, setSchemes] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://backend-wq9h.onrender.com/api/v1/users/scheme-get')
    .then(res => { 
      setSchemes(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
        <div>
           <Navigation></Navigation>
           <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Schemes</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            
                            <li class="breadcrumb-item text-body active" aria-current="page</div>">Schemes</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src={Schemes_img} alt="" style={{maxWidth: "70%"}}/>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                        <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>State Name</option>
                                    <option value="1">State 1</option>
                                    <option value="2">State 2</option>
                                    <option value="3">State 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Scheme Type</option>
                                    <option value="1">Scheme Type 1</option>
                                    <option value="2">Scheme Type 2</option>
                                    <option value="3">Scheme Type 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
           <div>
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-0 gx-5 align-items-end">
                            <div class="col-lg-6">
                               
                            </div>
                            {/* <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li class="nav-item me-2">
                                        <a class="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                    </li>
                                    <li class="nav-item me-2">
                                        <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                                    </li>
                                    <li class="nav-item me-0">
                                        <a class="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {schemes && schemes.map((scheme) => (
                    <div className="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.1s" key={scheme.id}>
                        <Link to="/schemes/detail" state={{scheme}}>
                      <div className="property-item rounded overflow-hidden">
                        <div className="position-relative overflow-hidden">
                          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{scheme.categoryType}</div>
                        </div>
                        <div className="p-4 pb-0">
                          <span className="d-block h5 mb-2">{scheme.schemeName}</span>
                          <p className="text-muted"><i className="fas   text-primary"></i> {scheme.sector}</p>
                          <p> <i className="fas  text-primary"></i> {scheme.QuickOverview}</p>
                        </div>
                      </div>
                      </Link>
                    </div>
                  ))}
               
                </div>
              </div>
            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}
export default Schemes;