import React from "react";
import { Icon } from "react-icons-kit";
import { quoteLeft } from "react-icons-kit/fa/quoteLeft";
import { quoteRight } from "react-icons-kit/fa/quoteRight";

export default function Testimonials() {
  return (
    <section id="testimonials-section" className="testimonials-container">
      <div className="container mt-5" style={{marginBottom: "4.5em"}}>
        <div className="col text-center">
          <div className="h4 mt-4 mb-4">Comments</div>
          <hr className="hr-2" />
          <div className="h2 mt-4 mb-4"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <div
              id="cardIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators card-indicators">
                <li
                  data-target="#cardIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#cardIndicators" data-slide-to="1"></li>
                <li data-target="#cardIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                      with his personal holding in bitcoin, he is financially affected when the price drops. 
                      “I might pump, but I don't dump," he said on a panel about bitcoin.
                      </p>
                      <h5 className="card-title mb-1">Elon Musk</h5>
                      <p className="mb-4">CEO of Tesla</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                      blockchain technology is more important than Bitcoin
                      </p>
                      <h5 className="card-title mb-1">David M. Solomon</h5>
                      <p className="mb-4">CEO of Goldman Sachs</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="card">
                    <Icon size="24" icon={quoteLeft} className="quote-left" />
                    <div className="card-body">
                      <p className="card-text">
                      I don't own Bitcoin, I'm not shorting it, so I take a neutral view... Moving 
                      money into a digital form and getting transaction costs down is something the Gates 
                      Foundation does in developing countries.
                      </p>
                      <h5 className="card-title mb-1">Bill Gates</h5>
                      <p className="mb-4"> co-founder of Microsoft</p>
                      <Icon
                        size="24"
                        icon={quoteRight}
                        className="quote-right"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
