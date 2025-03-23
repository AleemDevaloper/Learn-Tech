import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import img1 from "../assets/images/team-1.png";
import img2 from "../assets/images/fr.png";
import img3 from "../assets/images/bk.png";
import img4 from "../assets/images/mobile.png";
import img5 from "../assets/images/dec.png";
import "../assets/JS/index.js"

function Index() {
 
  return (
    <>
       {/* home section is start from here  */}
      <section className="home" id="home">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 home-txt" >
              <h3 className="my-2" >Hi welcome</h3>
              <h1 className='h1 main-text'>Explore Cources</h1>
              <p>Learn Web development, App development and Dekstop App development</p>
              
              <div className="d-flex my-2">
                <button className="btn-2 btn m-2" ><a href="./Assets/resume/My resume.pdf">Start Learning</a></button>
              </div>
            </div>
            <div className="col-md-6" >
              <div className="d-flex justify-content-center align-items-center">
                <div className="home-img">
                  <img src={img1} alt="" className="img1" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* home section is end at here  */}

     {/* Cources section is start from here  */}
      <section className="cources py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="main-text my-2">Explore Web Development</h1>
              <h3 className="sub-main-color">Start Learning Webdevelopment</h3>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row my-3">
            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
              <h2 className="sub-main-color my-5">Learn Front end Web development</h2>
              <button className="btn-2">Start Learning</button>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" className="w-100" />
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
          <img src={img3} alt="" className="w-100" />
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
            <h2 className="sub-main-color my-5">Learn Back end Web development</h2>
            <button className="btn-2">Start Learning</button>
            </div>
          </div>


        </div>
      </section>


      <section className="cources2 py-5">
        <div className="container">
          <div className="row col-12 text-center">
            <h1 className="my-2 main-text">Explore Mobile App Development</h1>
            <h3 className="my-3 sub-main-color">Start Learning Mobile app development</h3>
          </div>

          <div className="row my-5">
            <div className="col-md-6 d-flex justify-content-center align-items-start flex-column">
              <h2 className="sub-main-color my-4">Learn Mobile Application development</h2>
              <button className="btn-2">Start Learning</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center"><img src={img4} alt="" /></div>
          </div>
        </div>
      </section>


      <section className="cources3 bg-black py-5 my-5">
        <div className="container mb-5 py-3">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="main-text my-2">Explore Dekstop Development</h1>
              <h3 className="sub-main-color">Start Learning Dekstop app development</h3>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row my-5">
            <div className="col-md-6 d-flex justify-content-start align-items-start flex-column">
              <h2 className="sub-main-color my-4">Learn Dekstop Application development</h2>
              <button className="btn-2">Start Learning</button>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center"><img src={img5} alt="" /></div>
          </div>


        </div>
      </section>
      {/* cources section is end at here  */}

      {/* contact us section is start from here  */}
      <section className="contact-us"   id="contact">
        <div className="container">
          <div className="row">

            <div className="col-lg">
              <div className="contact-txt">
                <h4>Get in touch</h4>
                <h1>For any help and Support</h1><h1><font className="main-text">You can Contact Me</font>
                </h1>
                <p className="my-2">Fell free to get in touch . You can easily talk to me 24/7 .</p>
                
                <ul>
                  <li>Learn Mobile App development</li>
                  <li>Learn Web Development</li>
                  <li>Learn Dekstop Application development</li>
                </ul>
              </div>
            </div>

            <div className="col-lg">
              <div className="contact-form">
                <form action="https://formspree.io/f/xleqgkaz" method="POST" className="d-flex flex-column">
                  <div className="d-flex">
                    <input type="text" name="name" id="" placeholder="Enter Name" required />
                    <input type="email" name="email" id="" placeholder="Enter email" required />
                  </div>
                  <div className="d-flex">
                    <input type="tel" name="number" id="" placeholder="Enter Number" required />
                    <input type="text" name="subject" id="" placeholder="Enter Subject" required />
                  </div>
                  <textarea name="message" id="" cols="30" rows="4" placeholder="Message" required></textarea>
                  <div className="d-flex  align-items-center m-2 my-3">
                    <button className="btn" type="submit">Send us Message</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* contact us section is end at here  */}
    </>
  )
}

export default Index
