import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <section id="login" >
            <Link to="/" className="links">
                <div id="back-btn">
                    <span className="fa fa-arrow-left"></span> Back 
                </div>
            </Link>
             <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Ex. example@gmail.com"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary custom-btn">
                            Login
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="/">password?</a>
                    </p>
                    </div>
                </form>
                </div>
        </section> 
    );
}
 
export default Login;