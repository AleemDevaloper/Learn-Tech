import React from 'react';
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import "../assets/JS/index.js";

function Fotter() {
    return (
      <>
      <footer id="footer">
        <div className="footer-up">
         <div className="container">
            <div className="row" >

              <div className="col d-flex flex-column  justify-content-center">
                <div className="loc">
                  <h3>Address :</h3>
                  <ul>
                   <li> <i className="fa fa-light fa-phone"></i><a>aleemirfan672@gmail.com</a></li>
                    <li><i className="fa fa-light fa-envelope"></i><a>+92 3224 752036</a></li>
                  </ul>
                </div>

              </div>

              <div className="col d-flex justify-content-center flex-column">
                <div className="fol">
                  <h3>Follow Me On :</h3>
                  <ul>
                    <li><i className="fa fa-facebook"></i></li>
                    <li><i className="fa fa-linkedin"></i></li>
                    <li><i className="fa fa-skype"></i></li>
                    <li><i className="fa fa-whatsapp"></i></li>
                  </ul>
                </div>
              </div>


              <div className="col">
                <div className="form">
                  <form action="https://formspree.io/f/xleqgkaz" method="POST">
                    <div className="d-flex justify-content-center flex-column text-center">
                      <h2>Contact :</h2>
                      <input type="text" name="name" id="" placeholder="Enter Your Name" required />
                      <input type="email" name="email" id="" placeholder="Enter Your Email" required />
                      <textarea name="message" id="" cols="30" rows="5" placeholder="Message" required></textarea>
                      <button className="btn btn-footer" type="submit">Submit</button>
                    </div>

                  </form>
                </div>
              </div>
              

            </div>
         </div>
        </div>

        <div className="footer-down">
          <div className="container">
            <div className="text-center">
              &copy;Copyright 2023, All Rights Reserved <div className="main-color">Made by Muhammed Aleem</div>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
}

export default Fotter;
