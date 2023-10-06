import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

  const { createUser, profileUpdate } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const loginState = location.state ? location.state : "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    // User Data from the Form
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmpassword");
    const checked = form.get("terms");


    // Validation
    if (name === "" && photo === "" && email === "" && password === "" && confirmPassword === "") {
      toast.error("All fields are required!");
      return;
    } else if (name === "") {
      toast.error("Please provide your name!");
      return;
    } else if (photo === "") {
      toast.error("Please provide your photo URL!");
      return;
    } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(photo)) {
      return toast.error("Please provide a valid photo URL!");
    } else if (email === "") {
      toast.error("Please provide your email!");
      return;
    } else if (password === "") {
      toast.error("Password is required!");
      return;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an uppercase letter!");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      toast.error("Password must have a special character!");
    }
    else if (confirmPassword === "") {
      toast.error("Confirm password is required!");
      return;
    } else if (password !== confirmPassword) {
      return toast.error("Password didn't match!")
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      toast.error("Please provide an valid email!");
      return;
    } else if (!checked) {
      toast.error("Terms and conditions must be accepted!");
      return;
    }

    // No Error: Now Register the User
    // Loading
    toast.loading("Registering User...");
    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo)
          .then(() => {
            toast.dismiss();
            toast.success("Registration Successfull");
            navigate(location.state);
          })
          .catch(error => {
            toast.dismiss();
            toast.error(error.message);
            console.error(error.message);
          })
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
        <title>eManage - Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" name="name" placeholder="Full Name" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered focus:outline-none" />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" className="input input-bordered focus:outline-none" />
              </div>
              <div className="space-x-2 mt-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">By clickig this button, you agree to {`eManage's`} Terms and Conditions.</label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mt-5">
                » Already have an account? <Link state={loginState} to="/login" className="hover:underline text-primary">Login here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Register
