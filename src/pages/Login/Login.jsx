import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Clicked!")
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>eManage - Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body pb-0">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="mt-2">
                » Need an account? <Link to="/register" className="hover:underline text-primary">Register here</Link>.
              </p>
            </form>
            <div className="card-body pt-0">
              <span className="divider">OR</span>
              <button className="btn btn-primary btn-outline"><FaGoogle /> Login with Google</button>
              <button className="btn btn-neutral btn-outline"><FaGithub /> Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default Login
