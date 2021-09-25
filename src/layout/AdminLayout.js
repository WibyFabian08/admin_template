import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar } from "../components";

import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AdminLayout = ({ children, match }) => {
  const [left, setLeft] = useState(800);
  const [toggleMenu, setTogglemenu] = useState(false);

  const updateWidth = () => {
    setLeft(window.innerWidth);
  };

  const getNavLink = (path) => {
    return match.path === path ? 'bg-gray-200' : ''
  }

  const closeSidebar = () => {
    setTogglemenu(false)
    setTogglemenu(true)
    setLeft(-300)
    setTogglemenu(false)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const LEFT = left < 770 && !toggleMenu ? -300 : 0;

  return (
    <section className="relative flex w-full">
      <div
        className="absolute z-20 h-screen overflow-y-auto transition-all duration-300 ease-in-out md:relative bg-gray-50 admin-sidebar"
        style={{ left: LEFT, width: "300px" }}
      >
        <div
          className="absolute right-0 block px-2 py-2 bg-indigo-800 rounded-l-full top-1/2 md:hidden "
          style={{ cursor: "pointer" }}
          onClick={() => closeSidebar()}
        >
          <ArrowBackIosNewIcon
            style={{ color: "white" }}
            fontSize="small"
          ></ArrowBackIosNewIcon>
        </div>
        <div className="flex flex-col p-5">
          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Dashboard</p>
            <ul className="px-2 py-1">
            <li className={["flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200", getNavLink('/')].join(" ")}>
                <HomeIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></HomeIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Home
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <TimelineIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></TimelineIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Analitycs
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <TrendingUpIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></TrendingUpIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Sales
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Quick Menu</p>
            <ul className="px-2 py-1">
              <li className={["flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200", getNavLink('/users')].join(" ")}>
                <PersonOutlineIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></PersonOutlineIcon>
                <Link className="ml-1 text-gray-700" to="/users">
                  Users
                </Link>
              </li>
              <li className={["flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200", getNavLink('/products')].join(" ")}>
                <StorefrontIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></StorefrontIcon>
                <Link className="ml-1 text-gray-700" to="/products">
                  Products
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <AttachMoneyIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></AttachMoneyIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Transactions
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <BarChartIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></BarChartIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Reports
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Notifications</p>
            <ul className="px-2 py-1">
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <EmailOutlinedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></EmailOutlinedIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Mails
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <DynamicFeedOutlinedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></DynamicFeedOutlinedIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Feedback
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <ChatBubbleOutlineOutlinedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></ChatBubbleOutlineOutlinedIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Messages
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-3">
            <p className="text-sm font-bold text-gray-100">Staff</p>
            <ul className="px-2 py-1">
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <CasesOutlinedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></CasesOutlinedIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Manage
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <TimelineIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></TimelineIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Analitycs
                </Link>
              </li>
              <li className="flex items-center w-full px-2 py-1 rounded-xl hover:bg-gray-200">
                <BarChartIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></BarChartIcon>
                <Link className="ml-1 text-gray-700" to="/">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen overflow-x-hidden overflow-y-auto bg-gray-200 md:w-4/5">
        <div
          className="fixed left-0 z-10 block px-2 py-2 bg-indigo-800 rounded-r-full top-1/2 md:hidden "
          style={{ cursor: "pointer" }}
          onClick={() => setTogglemenu(!toggleMenu)}
        >
          <ArrowForwardIosIcon
            style={{ color: "white" }}
            fontSize="small"
          ></ArrowForwardIosIcon>
        </div>
        <Navbar></Navbar>
        <div className="p-5">{children}</div>
      </div>
    </section>
  );
};

export default withRouter(AdminLayout);
