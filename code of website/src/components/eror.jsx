
import "../assets/bootstrap/bootstrap.bundle.min.js";
import "../assets/bootstrap/bootstrap.min.css";
import "../assets/Scss/main.css";

function eror () {
    return(
     <>
      {/* Error page  */}
      <section className="error">
      <div className="container d-flex justify-content-center align-items-center my-5">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-12 text-center">
                    <h1 className="sub-main-color">404 Error Page Not Found
                    </h1>

                    <div className="my-4">
                        <button type="submit" className="btn-2"><li><a href="/">Go to Home Page</a></li>
                        </button>
                    </div>
                </div>
            </div>
      </div>
      </section>
       
     </>
    );
}
export default eror