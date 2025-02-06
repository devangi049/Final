import React, { useEffect } from 'react';
import Navigation from '../navigations/navbar';
import Schemes from '../assets/img/category.avif';
import Banking from '../assets/img/finance.png';
import Sports from '../assets/img/sports.png';
import Women from '../assets/img/woman.png';
import housing from '../assets/img/housing.png';
import plant from '../assets/img/plant.png';
import HealthCare from '../assets/img/healthcare.png';
import Footer from "../footer/footer.js";
import Education from '../assets/img/education.png';
import { Link } from 'react-router-dom';
import Transportion from '../assets/img/transportation.png';
import '../common/bootstrap.min.css';
import '../common/style.css'
import axios from 'axios';

function Categories() {

const [sector, setsector] = React.useState([]);

    useEffect(() => {
        axios.get('https://backend-wq9h.onrender.com/api/v1/users/givehowmanysechemesindifferentsector')
        .then((response) => {
            console.log(response.data);
            setsector(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [  ]);
    const categories = sector.length > 0 ? [
        {
            name: sector[0].sector,
            
            schemes: sector[0].count,
        }
        ,{
            name: sector[1].sector,
           
            schemes: sector[1].count,
        },
        {
            name: sector[2].sector,
            
            schemes: sector[2].count,
        },
        {
            name: sector[3].sector,
           
            schemes: sector[3].count,
        },
        {
            name: sector[4].sector,
           
            schemes: sector[4].count,
        },
        {
            name: sector[5].sector,
         
            schemes: sector[5].count,
        },
        {
            name: sector[6].sector,
           
            schemes: sector[6].count,
        },
        {
            name: sector[7].sector,
            schemes: sector[7].count,

        },
        {
            name: sector[8].sector,
            schemes: sector[8].count,
        },
        {
            name: sector[9].sector,
            schemes: sector[9].count,
        },{
            name: sector[10].sector,
            schemes: sector[10].count,
        },
        {
            name: sector[11].sector,
            schemes: sector[11].count,
        },
        {
            name: sector[12].sector,
            schemes: sector[12].count,
        },
        {
            name: sector[13].sector,
            schemes: sector[13].count
        }

    ] : [];
    return (
        <div>
             <Navigation></Navigation>
             <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Categories</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            
                            <li class="breadcrumb-item text-body active" aria-current="page">Categories</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src={Schemes} alt="" style={{maxWidth: "70%"}}/>
                </div>
            </div>
        </div>


             <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0 py-3" placeholder="Search Keyword"/>
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

        <div class="container-xxl py-5" >   
            <div class="container">
                     <div className="row g-4">
                            {categories.map((category, index) => (
                              <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.1}s`}>
                                <Link to="/categories/schemes" state={{category}}  className="cat-item d-block bg-light text-center rounded p-3">
                                  <div className="rounded p-4">
                                    <div className="icon mb-3">
                                      <img className="img-fluid" src={category.image} alt="Icon" style={{ maxWidth: "40%" }} />
                                    </div>
                                    <h6>{category.name}</h6>
                                    <span>{category.schemes} Schemes Available</span>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
            </div>
        </div>
        <Footer />
            </div>
    )
}
export default Categories;