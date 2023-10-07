import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import LoginImg from "../../assets/login.jpg";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {

  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const registerState = location.state ? location.state : "/";

  const handleLogin = (event) => {
    event.preventDefault();

    // Data from User
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Validation
    if (email === "" && password === "") {
      toast.error("All fields are required!");
      return;
    } else if (email === "") {
      toast.error("Email field can not be empty!");
      return;
    }
    else if (password === "") {
      toast.error("Password field can not be empty!");
      return;
    }

    // No Error: Login User
    // Loading
    toast.loading("Login in Process...");

    loginUser(email, password)
      .then(() => {
        toast.dismiss();
        toast.success("Login Success!");

        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.code);
      })
  }

  // Soial Media Login
  const handleSocialLogin = (media) => {
    toast.loading("Login in Process...");
    media()
      .then(() => {
        toast.dismiss();
        toast.success("Login Success");

        // Navigate after Login
        location.state
          ? navigate(location.state)
          : navigate("/")
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.message)
      })
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>eManage - Login</title>
      </Helmet>
      <Header></Header>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="my-5">Please login to get access of unlimited features of our eManage website.</p>
            <figure className="hidden lg:block">
              <img className="w-3/6 mx-auto rounded-2xl" src={LoginImg} alt="Login" />
            </figure>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body pb-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="example@email.com" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="mt-2">
                » Need an account? <Link state={registerState} to="/register" className="hover:underline text-primary">Register here</Link>.
              </p>
            </form>
            <div className="card-body pt-0">
              <span className="divider">OR</span>
              <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-primary btn-outline"><FaGoogle /> Login with Google</button>
              <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-neutral btn-outline"><FaGithub /> Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Login
