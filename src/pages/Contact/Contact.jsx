import { Helmet, HelmetProvider } from "react-helmet-async"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import toast from "react-hot-toast"

const Contact = () => {

  const handleContact = (event) => {
    event.preventDefault();

    // User Input Data
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    // Data Validation
    if (name === "" && email === "" && message === "") return toast.error("All fields are required!");
    if (name === "") return toast.error("Name field is required!");
    if (email === "") return toast.error("Email field is required!");
    if (message === "") return toast.error("Message field is required!");

    toast.success("Your message has been sent!");
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Header></Header>
      <div className="bg-base-200">
        <div className="max-w-lg mx-auto py-12 px-3">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleContact} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="example@email.com" className="input input-bordered focus:outline-none" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea name="message" rows="5" placeholder="Message..." className="textarea textarea-bordered focus:outline-none"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Contact</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </HelmetProvider>
  )
}

export default Contact
