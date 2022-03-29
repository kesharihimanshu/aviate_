import React from "react";
import keshari from "../images/KeshariTimes.jpg";

export default function Footer() {
  return (
    <footer id="footer" className="footer-container">
      <div className="container justify-content-center mt-5 mb-5">
        <div className="row">
          <div className="col-4 col-lg-6">
          <img
              src={keshari}
              width="90em"
              alt="Contact"
              className="ml-md-5"
            />
            <div className="h2">KeshariTimes</div>
            <hr className="hr-4" />
           
          </div>
          <div className="col-4 col-lg-3">
            <div className="h3">Links</div>
            <hr className="hr-4" />
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/kesharihimanshu" className="footer-link">About Me</a>
              </li>
              <li className="mb-2">
              <a href="https://www.investopedia.com/legal-4768893#editorial-policy" className="footer-link">Editorial Policy</a>
              </li>
              <li className="mb-2">
              <a href="https://www.investopedia.com/legal-4768893#editorial-policy" className="footer-link">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-lg-3">
           
            <ul className="list-unstyled">
              <li className="mb-2">
              <a href="https://www.investopedia.com/legal-4768893#terms-of-use" className="footer-link">Terms of Use
</a>
              </li>
              <li className="mb-2">
              <a href="https://www.investopedia.com/financial-term-dictionary-4769738" className="footer-link">Dictionary</a>
              </li>
              <li className="mb-2">
                <a href="https://www.investopedia.com/news-4427706" className="footer-link">News</a>
              </li>
              <li className="mb-2">
                <a href="https://www.dotdashmeredith.com/careers" className="footer-link">Careers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
