import React from "react";
import { Link } from 'react-router-dom';
function CategoryListing(){
    const schemes = [
        {
          id: 1,
          schemeName: "Scheme Name 1",
          category: "Banking & Finance",
          location: "City, State, India",
          caste: "Caste 1",
          region: "Region 1",
          totalRegistrations: 32,
          categoryType: "Appartment",
        },
        {
          id: 2,
          schemeName: "Scheme Name 2",
          category: "Banking & Finance",
          location: "City, State, India",
          caste: "Caste 2",
          region: "Region 2",
          totalRegistrations: 45,
          categoryType: "Appartment",
        },
        {
          id: 3,
          schemeName: "Scheme Name 3",
          category: "Banking & Finance",
          location: "City, State, India",
          caste: "Caste 3",
          region: "Region 3",
          totalRegistrations: 18,
          categoryType: "Appartment",
        },
        // Add more schemes as needed
      ];
    
return(
    <div>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-0 gx-5 align-items-end">
                    <div class="col-lg-6">
                        <div class="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 class="mb-3">Top Schemes</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                        </div>
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
          {schemes.map((scheme) => (
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={scheme.id}>
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{scheme.categoryType}</div>
                </div>
                <div className="p-4 pb-0">
                  <a className="d-block h5 mb-2" href="">{scheme.schemeName}</a>
                  <h5 className="text-primary mb-3">{scheme.category}</h5>
                  <p><i className="fa fa-map-marker-alt text-primary me-2"></i>{scheme.location}</p>
                </div>
                <div className="d-flex border-top">
                  <small className="flex-fill text-center border-end py-2">{scheme.caste}</small>
                  <small className="flex-fill text-center border-end py-2">{scheme.region}</small>
                  <small className="flex-fill text-center py-2">Total Registrations: {scheme.totalRegistrations}</small>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
            {/* <a className="btn btn-primary py-3 px-5" href="">Browse More Schemes</a> */}
            <Link to='/schemes' className="btn btn-primary py-3 px-5">Browse More Schemes</Link>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    </div>
)
}
export default CategoryListing;