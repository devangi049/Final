import React, { useEffect } from 'react';
import Navigation from '../navigations/navbar.js';
import Schemes_img from '../assets/img/category.avif';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from "../footer/footer.js";
import axios from 'axios';
function SchemeDetail() {
  const location = useLocation();
  const { scheme } = location.state || {}; // Retrieve the `scheme` object
  const [schemeData, setSchemeData] = React.useState([]);
  useEffect(() => { 
    axios.get(`https://backend-wq9h.onrender.com/api/v1/users/giveaparticularscheme/${scheme._id}`)
    .then(res => { 
      console.log(res.data);
      setSchemeData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const data = [
    "Scheme Highlights",
    "State",
    "Quick Overview",
    "Eligibility Criteria",
    "Benefits",
    "Required Documents",
    "Application Process",
    "How to check Status ?",
    "Category",
    "Cast",
    "Occupation",
    "For Students",
    "For minority",
    "For disability person",
  ];
  return (
    
    <div>
      <Navigation></Navigation>
     
      <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">{schemeData.schemeName}</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                            <li class="breadcrumb-item"><Link to='/schemes'>Schemes</Link></li>
                            
                            
                            <li class="breadcrumb-item text-body active" aria-current="page">Schmes Details</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src={Schemes_img} alt="" style={{maxWidth: "70%"}}/>
                </div>
            </div>
        </div>
       <div style={{paddingLeft: "60px", paddingRight: "60px"}}>
        <h3 className="text-primary mb-3">
          {data[0]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>{
          schemeData.schemeHighlights
          }</p>

        <h3 className="text-primary mb-3">
          {data[1]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.state
          }
        </p>

        <h3 className="text-primary mb-3">
          {data[2]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>{
          schemeData.QuickOverview
          }</p>

        <h3 className="text-primary mb-3">
          {data[3]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>{
          schemeData.EligibliltyCriteria
          }</p>

        <h3 className="text-primary mb-3">
          {data[4]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.Benefits
          }
        </p>

        <h3 className="text-primary mb-3">
          {data[5]}  
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.requiredDocuments
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[6]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.ApplicationProcess
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[7]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.HowtoCheckStatus
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[9]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.cast
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[10]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.Occupation
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[11]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.Student
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[12]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.minority
          }
        </p>
        <h3 className="text-primary mb-3">
          {data[13]}
        </h3>
        <p className="d-block h5 mb-2" style={{paddingBottom: "30px"}}>
          {
            schemeData.disability
          }
        </p> 
       </div>
       <Footer />
    </div>
  );
}
export default SchemeDetail;