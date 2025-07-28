
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";
import img1 from "../assets/images/about.png";
import img2 from "../assets/images/about.jpg";
function About () {
return(
 <>
    <section className="about">
        <div className="container my-5 p-lg-2 py-5">
            <div className="row my-5">
                <div className="col-lg-6">
                    <h3 className="h1-sub2">About</h3>
                    <h1 className="sub-main-color d-flex">Welcome to <div className="main-text mx-2">Learn Tech</div> </h1>
                    <h3 className="sub-main-color my-3">Website for Learners</h3>
                    <p className="sub2-main-color">I build this website for peoples who wants to Learn. Peoples who want to learn new 
                      technologies. People who wants to learn and earn money. At TechMentor, I passionate about empowering individuals to harness the power of technology.
                       My mission is to provide accessible, high-quality education that equips you with the skills needed to thrive in a digital world. Whether you're just starting out or looking to advance your career,
                        I have something for everyone.
                    </p>
               </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center py-3 my-2">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
   
     <div className="bg-black">
     <div className="container py-4">
            <div className="row my-3 py-5">
                <div className="col-12 text-center">
                <h1 className="main-text">What We Offer</h1>
                </div>
            </div>

            <div className="row my-3 py-5">
                <div className="col-12">
               <h4 className="sub-main-color my-3">Comprehensive Courses :</h4> 
               <p className="sub2-main-color">I offer a wide range of courses covering the latest in technology, 
                from front-end and back-end development dekstop and mobile app development.
                My curriculum is designed to be practical, engaging, and up-to-date with industry standards.
               </p>

              <h4 className="sub-main-color my-3">Interactive Learning :</h4>
               <p className="sub2-main-color">My interactive learning platform provides real-world projects, 
                and immediate feedback to ensure you gain not only theoretical knowledge but also practical skills.
               </p>

              <h4 className="sub-main-color my-3">Support :</h4>
              <p className="sub2-main-color">Learning is a journey, and I am here to support you every step of the way.
                 you can contact me for support and engage in discussions, collaborate on projects, and get your questions answered.
              </p>
             
             <h4 className="sub-main-color my-3"> My Vision :</h4>
             <p className="sub2-main-color">I believe that technology has the power to transform lives, 
                and I committed to making high-quality tech education accessible to everyone.
                 By fostering a culture of continuous learning and innovation, 
                 I aim to empower individuals to achieve their full potential and contribute to the technological 
                 advancements of tomorrow.
             </p>
                </div>
            </div>
        </div>
     </div>
       

       <div className="container my-5">
        <div className="row">
            <div className="col-12 text-center my-2">
                <h1 className="main-text">My Journey</h1>
            </div>
         
        </div>
        <div className="row">
        <div className="col-lg-7 d-flex justify-content-center flex-column py-3 my-2 px-lg-4">
             <h2 className="sub-main-color my-3">My story :</h2>
            <p className="sub2-main-color">Learn Tech was founded by Aleem irfan who recognized the 
                need for a comprehensive, engaging, and practical approach to learning tech skills.
                 With diverse expertise in software development, design, 
                and education, He dedicated to providing you with the best learning experience possible.
                At Learn Tech, I believe in the transformative power of technology. My mission is to make
                 high-quality tech education accessible to everyone, whether you're just starting your journey or 
                 looking to enhance your skills.
                 I am here to support you in mastering the technologies that shape our world.
             </p>
        </div>

        <div className="col-lg-5  d-flex justify-content-center align-items-center py-3 my-2 px-lg-4">
          <img src={img2} alt="" />
        </div>
        </div>
       </div>
    </section>
 </>

);
}
export default About