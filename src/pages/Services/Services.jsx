import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header";

const Services = () => {

  const { id } = useParams();

  return (
    <>
      <Header></Header>
      <span>ID: {id}</span>
    </>
  )
}

export default Services
