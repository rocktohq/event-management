import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import toast from "react-hot-toast"
import useInputState from "../../hooks/useInputState"
import { useNavigate } from "react-router-dom"

const Settings = () => {

  const navigate = useNavigate();
  const { user, profileUpdate } = useContext(AuthContext);
  const nameState = useInputState(user.displayName);
  const photoState = useInputState(user.photoURL);

  const handleUpdate = (event) => {
    event.preventDefault();

    // Data from User
    let name = nameState.value;
    let photo = photoState.value;

    if (name === "") name = user.displayName;
    if (photo === "") photo = user.photoURL;

    // Updating User Profile
    toast.loading("Updating User Profile...");
    profileUpdate(name, photo)
      .then(() => {
        toast.dismiss();
        toast.success("Profile Updated!");
        navigate("/settings");
      })
      .catch(error => {
        toast.dismiss();
        toast.error(error.message);
        console.error(error.message);
      })
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <Header></Header>
      <section className="pb-10 md:py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...nameState} type="text" name="name" placeholder={user.displayName} className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input {...photoState} type="text" name="photo" placeholder={user.photoURL} className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Settings
