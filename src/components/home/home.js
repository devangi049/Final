import React,{useEffect} from "react";
import Navigation from "../navigations/navbar";
import '../common/style.css';
import '../common/bootstrap.min.css';
import Image1 from '../assets/img/main.png';
import Transportion from '../assets/img/transportation.png';
import Banking from '../assets/img/finance.png';
import Sports from '../assets/img/sports.png';
import CategoryListing from "../schemes/common/schemesListing.js";
import Women from '../assets/img/woman.png';
import housing from '../assets/img/housing.png';
import plant from '../assets/img/plant.png';
import HealthCare from '../assets/img/healthcare.png';
import Footer from "../footer/footer.js";
import Education from '../assets/img/education.png';
import about from '../assets/img/about.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from "axios";
function Home() {
  // Sample categories with IDs, names, images, and schemes count
  const [sector, setsector] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/users/givehowmanysechemesindifferentsector')
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
      <Navigation />
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">Discover, <span className="text-primary">Apply,</span>and Benefit from Government Schemes</h1>
            <p className="animated fadeIn mb-4 pb-2">Access the Best Government Schemes in One Place, Empowering You with Government Schemes at Your Fingertips. Create an account to save your favorite schemes and track your applications.</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item">
                <img className="img-fluid" src={Image1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
            <h1 className="mb-3">Browse Scheme Categories</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${index * 0.2 + 0.1}s`}>
                <Link to={`/schemes/${category.categoryId}`} className="cat-item d-block bg-light text-center rounded p-3">
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

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid w-100" src={about} />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">#1 Place To Find The Perfect Government Schemes</h1>
              <p className="mb-4">Get notified about the latest government schemes and updates, directly in your inbox or on the portal.</p>
              <p><i className="fa fa-check text-primary me-3"></i>Step-by-step guidance for applying to various government schemes.</p>
              <p><i className="fa fa-check text-primary me-3"></i>Browse government schemes specific to your state or region.</p>
              <p><i className="fa fa-check text-primary me-3"></i>Find a detailed checklist of necessary documents for each scheme's application process.</p>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">About Us</a>
            </div>
          </div>
        </div>
      </div>

      <CategoryListing />
      <Footer />
    </div>
  );
}

export default Home;
