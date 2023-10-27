import { Link } from 'react-router-dom'
import Button from "./Button";

const BackButton = () => {

  return ( 
    <Link to="/"><Button color="#343a40" text="Back الرجوع"></Button> </Link>
    );
}

export default BackButton
