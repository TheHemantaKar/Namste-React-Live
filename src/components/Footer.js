import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2 className="m-10 text-center font-bold">
        This Site developed by {user.name} - {user.email}
      </h2>
    </div>
  );
};

export default Footer;
