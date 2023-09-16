import { FaLinkedin, FaYelp } from "react-icons/fa";
import DynamicMenu from "./Dynamic_Menu";
const today = new Date();

const Footer = () => {
  return (
    <footer className="text-parchment bg-onyx flex justify-center items-center py-5">
      <FaLinkedin className="" />
      <FaYelp className="" />
      <p className="pl-2 ml-5">Laughing Coyote Dev &copy; {today.getFullYear()}</p>
      <div className="ml-5 flex space-between">
      <DynamicMenu />
      </div>
    </footer>
  );
};

export default Footer;
