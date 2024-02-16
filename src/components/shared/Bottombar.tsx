import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";
const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            to={link.route}
            className={`${
              isActive && "bg-primary-500 rounded-[10px]"
            } flex-center flex-col gap-1 p-s transition`}
            key={link.label}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              className={`${isActive && `invert-white`}`}
            />
            <p className="tiny-medium text-light-2"></p>
            {link.label}
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
