import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import web1 from "../assets/images/web.png";
import cr1 from "../assets/images/Dekstopapp/app-img.png";
import cr2 from "../assets/images/Dekstopapp/app-img-2.png";
import cr3 from "../assets/images/Dekstopapp/app-img-3.png";
import cr4 from "../assets/images/Dekstopapp/app-img-4.png";
import cr5 from "../assets/images/cr5.png";
import cr6 from "../assets/images/cr6.png";
import cr7 from "../assets/images/cr7.png";
import cr8 from "../assets/images/cr8.png";



function Appdev() {
  return (
    <div>
          <section className="web my-5">
            <div className="container my-2 py-4">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center flex-column">
                  <h1 className="main-text"> Learn Dekstop App Development</h1>
                  <p className="sub2-main-color my-2">
                    From Learn tech you get to Learn Dekstop App Development. Here you get get to learn full stack Dekstop App development
                    .I provide you free resources and also tell you that how can you learn Dekstop App develoment.
                     . I give you complete guide
                  </p>
                 
                </div>
                <div className="col-md-6">
                  <img src={web1} alt="img" />
                </div>
              </div>
            </div>
            <div className="bg-black my-5 py-3">
            <div className="container my-3">
                <div className="row my-3">
                    <div className="col-12 text-center">
                        <h1 className="main-text my-2">Start Learning</h1>    
                    </div>
                </div>
            </div>
    
            <div className="container-xl">
                {/* First line of cr  */}
                <div className="row">
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr1} alt="" />
                        <button className="my-5 btn-2">
                            <a href="https://www.youtube.com/playlist?list=PLkZU2rKh1mT8cML-VNcUHF3vB8qzzgxuA" className="btn2">Start Learning</a>
                        </button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr2} alt="" />
                        <button className="my-5 btn-2"><a href="https://www.youtube.com/playlist?list=PLUu5dK1pEfFd8jHqxiiEUquQsXGbNVARy">Start Learning</a></button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr3} alt="" />
                        
                        <button className="my-5 btn-2"><a href="https://www.youtube.com/playlist?list=PLfxALjnZodrvtzXTg-ZFeRL7AIutdJBV4">Start Learning</a></button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr4} alt="" />
                        
                        <button className="my-5 btn-2"><a href="https://www.youtube.com/playlist?list=PL8p2I9GklV46sT0RXw6PlMRVxJzEDUWuD">Start Learning</a></button>
                    </div>
                </div>
               {/* second line of cr  */}
               <div className="row">
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr5} alt="" />
                        <button className="my-5 btn-2">
                            <a href="https://www.youtube.com/playlist?list=PL0b6OzIxLPbyrzCMJOFzLnf_-_5E_dkzs" className="btn2">Start Learning</a>
                        </button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr6} alt="" />
                        <button className="my-5 btn-2">
                            <a href="https://www.youtube.com/playlist?list=PL0b6OzIxLPbzf12lu5etX_vjN-eUxgxnr">Start Learning</a></button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr7} alt="" />
                        
                        <button className="my-5 btn-2">
                            <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt">Start Learning</a></button>
                    </div>
                    <div className="col-md-3 d-flex justofy-content-center align-items-center flex-column">
                        <img src={cr8} alt="" />
                        
                        <button className="my-5 btn-2">
                            <a href="https://www.youtube.com/playlist?list=PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM">Start Learning</a></button>
                    </div>
                </div>
    
              
                </div>    
          </div>
          </section>
        </div>
  )
}

export default Appdev
