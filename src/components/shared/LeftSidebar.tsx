import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";

import { useEffect } from "react";
import { useSignOutAccount } from "@/lib/react-query/quriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Button } from "../ui/button";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px] bg-dark-2">
      <div className="flex flex-col">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>

        <Link
          to={`/assets/images/profile.png/ ${user.id}`}
          className="flex gap-3 items-center"
        >
          <img
            src={user.imageUrl || "/assets/images/profile.png"}
            alt="profile"
          />
          <div className="flex flex-col ">
            <p className="body-bold">{user.name}Tshewang Gyaltshen</p>
            <p className="small-regular text-regular-3">
              @{user.username}Tshewang
            </p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li className={`leftsidebar-link group`} key={link.label}>
                <NavLink
                  to={link.route}
                  className={`flex gap-4 items-center p-4 ${
                    isActive && `bg-primary-500 rounded-md`
                  }`}
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    width={16}
                    height={16}
                    className={`group-hover:invert-white ${
                      isActive && `invert-white`
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button className="shad-button_ghost" onClick={() => signOut}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="lg:base-medium small-medium">logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
