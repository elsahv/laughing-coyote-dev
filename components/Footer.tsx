import Link from "next/link";
import { FaLinkedin, FaYelp } from "react-icons/fa";
const today = new Date();

const Footer = () => {
  return (
    <footer className="md:text-2xl text-md text-parchment bg-onyx flex justify-center items-center py-5">
      <FaLinkedin className="" />
      <FaYelp className="" />
      <p className="pl-2 ml-5">Laughing Coyote Dev &copy; {today.getFullYear()}</p>
      <div className="ml-5 flex space-between">
        <Link className="px-2"href="/package-rates">package-rates</Link>
        <Link className="px-2"href="/contact">contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
