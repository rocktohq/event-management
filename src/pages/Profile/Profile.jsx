import { useContext } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { AuthContext } from "../../providers/AuthProvider"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{user.displayName}</title>
      </Helmet>
      <Header></Header>
      <section className="py-10 md:py-12 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="max-w-screen-md mx-auto shadow-md rounded-md p-5 flex flex-col lg:flex-row gap-5 items-center">
            <figure>
              <img className="lg:h-48 lg:w-48" src={user.photoURL} alt={user.displayName} />
            </figure>
            <div>
              <h4>Name: <span className="font-medium">{user.displayName}</span></h4>
              <p>Email: {user.email}</p>
              <Link to="/settings"><button className="btn btn-primary btn-sm rounded mt-5"><FaUser /> Update Profile</button></Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Profile
