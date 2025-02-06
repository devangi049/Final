import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa'; // Import the icon correctly
import './FAQPage.css'; // Custom CSS file for animations and responsiveness
import  axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from '../navigations/navbar.js';
import Footer from '../footer/footer.js';
function FAQPage() {
  const [form, setForm] = useState({
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://backend-wq9h.onrender.com/api/v1/users/faq', form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken') || Cookies.get('accessToken')}`,
        },
    })
      .then((response) => {
        console.log(response.data);
        alert('Your question has been submitted successfully!');
        setForm({ name: '', email: '', question: '' });
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred while submitting your question. Please try again later.');
      });
  };

  return (
   <>
   <Navbar/>
    <div className="faq-page py-5">
      <div className="container">
        {/* Title Section */}
        <div className="faq-title text-center py-4">
          <h1 className="display-4">Frequently Asked Questions</h1>
          <p className="lead">Here are some common questions and answers. Feel free to ask more!</p>
        </div>

        {/* FAQ and Ask Your Question Section - Row Layout */}
        <div className="row">
          {/* FAQ Section */}
          <div className="col-md-6">
            <div className="faq-section">
              <div className="accordion" id="faqAccordion">
                {[
                  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
                  { question: "How do I install React?", answer: "You can install React using npm or yarn." },
                  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript." },
                  { question: "How do I handle state in React?", answer: "You can use the useState hook to manage state in functional components." },
                  { question: "What is a component?", answer: "A component is a self-contained, reusable piece of code that defines part of a user interface." },
                ].map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="true"
                        aria-controls={`collapse${index}`}
                      >
                        <FaQuestionCircle className="me-3" />
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ask Your Question Section */}
          <div className="col-md-6">
            <div className="ask-question-section">
              <h2 className="text-center mb-4">Ask Your Question</h2>
              <form onSubmit={handleSubmit} className="question-form">
               
                <div className="mb-3">
                  <label htmlFor="question" className="form-label">Your Question</label>
                  <textarea
                    className="form-control"
                    id="question"
                    name="question"
                    rows="3"
                    value={form.question}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit Question</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
    </>
  );
}

export default FAQPage;
