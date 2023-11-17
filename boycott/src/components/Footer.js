import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {/* <p>Copyright &copy; 2023</p> */}
      {location.pathname !== "/about" && (
        <Link to="/about">قم بتقديم آرائك أو توصياتك  هنا وساعدنا</Link>
      )}
      <br/>
      <p>Version &copy; 3.0.0</p>
    </footer>
  );
};

export default Footer;
