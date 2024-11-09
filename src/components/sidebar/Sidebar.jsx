import "../sidebar/Sidebar.scss"
import { Link, NavLink } from "react-router-dom";
import {
  BiCoinStack,
  PiHandHeart,
  FaRegStar,
  IoKeyOutline,
  IoBriefcaseOutline,
  TbUsersMinus,
  HiOutlineArrowRight,
  LuMail,
  IoCallOutline,
  LuBellPlus,
  HiOutlineBellSnooze,
  TfiViewListAlt,
  MdOutlineSupportAgent,
  IoSettingsOutline,
  MdLogout,
} from "../../Icons";
import Avatar from "../../assets/avatar.jpg";
import { FaQuestion } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar-cont">
      <div className="sidebar-wrapper">
        <Link className="logo">Circoo</Link>

        <div className="side-tag">
          <p className="title">DASHBOARD</p>

          <div className="side-tag-li">
            <NavLink to="/overview">
              <IoBriefcaseOutline className="icon" /> <p>Overview</p>
            </NavLink>

            <NavLink to="/analytics">
              <IoKeyOutline className="icon" /> <p>Analytics</p>
            </NavLink>

            <NavLink to="/subscriptions">
              <TbUsersMinus className="icon" /> <p>Subscription</p>
            </NavLink>
          </div>
        </div>

        <div className="side-tag">
          <p className="title">COMMUNICATION</p>

          <div className="side-tag-li">
            <NavLink to="/emailconfig">
              <LuMail className="icon" /> <p>Email Configuration</p>
            </NavLink>

            <NavLink to="/voice">
              <IoCallOutline className="icon" /> <p>SMS / Voice</p>
            </NavLink>

            <NavLink to="/notifications">
              <LuBellPlus className="icon" /> <p>Cusomer Notif</p>
            </NavLink>

            <NavLink to="/reminders">
              <HiOutlineBellSnooze className="icon" /> <p>Payment Reminders</p>
            </NavLink>
          </div>
        </div>

        <div className="side-tag">
          <p className="title">BILLING</p>

          <div className="side-tag-li">
            <NavLink to="/discount">
              <BiCoinStack className="icon" /> <p>Discount Codes</p>
            </NavLink>

            <NavLink to="/renewal">
              <FaRegStar className="icon" /> <p>Subscription Renewal</p>
            </NavLink>
          </div>
        </div>

        <div className="side-tag">
          <p className="title">CUSTOMER</p>

          <div className="side-tag-li">
            <NavLink to="/customerlist">
              <TfiViewListAlt className="icon" /> <p>Customer List</p>
            </NavLink>

            <NavLink to="/tickets">
              <MdOutlineSupportAgent className="icon" /> <p>Support Tickets</p>
            </NavLink>

            <NavLink to="/faq">
              <FaQuestion className="icon" /> <p>FAQ & Help Center</p>
            </NavLink>
          </div>
        </div>

        <div className="side-tag last">
          <p className="title">SETTINGS</p>

          <div className="side-tag-li">
            <NavLink to="/settings">
              <PiHandHeart className="icon" /> <p>General Settings</p>
            </NavLink>

            <NavLink to="/access">
              <IoSettingsOutline className="icon" /> <p>Access Control</p>
            </NavLink>

            <NavLink to="/logout">
              <MdLogout className="icon" /> <p>Log Out</p>
            </NavLink>
          </div>
        </div>

        <div className="side-profile">
          <div className="side-p-box">
            <div className="avatar">
              <img src={Avatar} alt="" />
            </div>

            <div className="details">
              <div className="name">Anon Anonymousdwnw</div>
              <div className="position">HR at anon</div>
            </div>
          </div>

          <HiOutlineArrowRight className="arrow-rdt" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
