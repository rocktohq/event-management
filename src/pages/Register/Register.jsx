import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
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
                <input type="text" placeholder="Full Name" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="example@email.com" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="confirmpassword" placeholder="Confirm Password" className="input input-bordered focus:outline-none" />
              </div>
              <div className="space-x-2 mt-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">By clickig this button, you agree to {`eManage's`} Terms and Conditions.</label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mt-5">
                » Already have an account? <Link to="/login" className="hover:underline text-primary">Login here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Register
