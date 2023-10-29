import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      {/* <p>Copyright &copy; 2023</p> */}
      {location.pathname !== "/about" && (
        <Link to="/about">تعرف علينا وساعدنا</Link>
      )}
      <br/>
      <p>Version &copy; 2.0.0</p>
    </footer>
  );
};

export default Footer;
