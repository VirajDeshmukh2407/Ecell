import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive} className="text-white">
        <Link to="/">
          <MenuItem
            setActive={setActive}
            item="Home"
            className=" hover:text-yellow-600"
          ></MenuItem>
        </Link>
        <MenuItem
          setActive={setActive}
          item="About"
          className="hover:text-yellow-500"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Events">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <Link to="/econclave">
              <ProductItem
                title="E-Conclave"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
            </Link>
            <Link to="/econclave">
              <ProductItem
                title="Aarambh"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
            </Link>
            <ProductItem
              title="Startup Sutra"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            {/* <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            /> */}
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} item="Contact Us">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
