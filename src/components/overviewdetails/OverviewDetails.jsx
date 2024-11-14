/* eslint-disable react/prop-types */
import "../overviewdetails/overviewDetails.scss";
import {
  CiCalendarDate,
  HiOutlineFolderOpen,
  LiaCheckCircle,
  CiMail,
  HiOutlineBars3CenterLeft,
  IoCheckmarkDoneCircleSharp,
  MdOutlineKeyboardArrowDown,
  HiOutlineDotsHorizontal,
  IoFlagSharp,
  TbReceipt,
  RiCircleFill,
  LuBellPlus,
} from "../../Icons";
import Calendar from "../../assets/calendar.jpg";
import { useState } from "react";
import Mailing from "../mailing/Mailing";

const OverviewDetails = () => {
  const [selected, setSelected] = useState("schedule");

  const [active, setActive] = useState(null);
  const handleSelect = (id) => {
    setActive(id);
    setSelected(id);
  };

  return (
    <div className="h-details">
      <div className="title">Hiring Details</div>

      <div className="h-details-sect">
        <div className="h-details-navs">
          <div
            className={`hd-btn ${active === "schedule" ? "active" : ""}`}
            onClick={() => handleSelect("schedule")}
          >
            <CiCalendarDate className="icon" />
            <p>Hiring Schedule</p>
          </div>

          <div
            className={`hd-btn ${active === "timeline" ? "active" : ""}`}
            onClick={() => handleSelect("timeline")}
          >
            <HiOutlineBars3CenterLeft className="icon" />
            <p>Timeline</p>
          </div>

          <div
            className={`hd-btn ${active === "documents" ? "active" : ""}`}
            onClick={() => handleSelect("documents")}
          >
            <HiOutlineFolderOpen className="icon" />
            <p>Documents</p>
          </div>

          <div
            className={`hd-btn ${active === "task" ? "active" : ""}`}
            onClick={() => handleSelect("task")}
          >
            <LiaCheckCircle className="icon" />
            <p>Tasks</p>
          </div>

          <div
            className={`hd-btn ${active === "mailing" ? "active" : ""}`}
            onClick={() => handleSelect("mailing")}
          >
            <CiMail className="icon" />
            <p>Mailing</p>
          </div>
        </div>

        <div className="hd-sect-contents">
          <Directory selected={selected} />
        </div>
      </div>
    </div>
  );
};

const Directory = ({ selected }) => {
  switch (selected) {
    case "schedule":
      return (
        <div className="hd-schedule">
          <div className="upload-doc">
            <div className="head">
              <div className="left">
                <IoCheckmarkDoneCircleSharp fill="green" />
                <p>
                  Upload Documents <span>(2 Todo)</span>
                </p>
              </div>

              <div className="right">
                <HiOutlineDotsHorizontal className="icon" />
                <MdOutlineKeyboardArrowDown className="icon" />
              </div>
            </div>

            <div className="sections">
              <div className="name-sect">
                <div className="name-title">Name</div>
                <div className="date-title">Due date</div>
                <div className="lead-title">Lead</div>
                <div className="priority-title">Priority</div>
                <div className="doc-title">Docs</div>
              </div>

              <div className="details-sect">
                <div className="details">
                  <div className="name">
                    <IoCheckmarkDoneCircleSharp fill="green" />
                    <p>Candidate collins cv and portfolio</p>
                  </div>

                  <div className="date">
                    <CiCalendarDate fontSize={18} />
                    <p>1/02/24</p>
                  </div>

                  <div className="lead">
                    <div className="avatar">pH</div>
                  </div>

                  <div className="priority">
                    <IoFlagSharp fill="red" />
                  </div>

                  <div className="docs">
                    <TbReceipt />
                    <p>mave_cv.pdf</p>
                  </div>
                </div>

                <div className="details">
                  <div className="name">
                    <IoCheckmarkDoneCircleSharp fill="green" />
                    <p>Candidate collins cv and portfolio</p>
                  </div>

                  <div className="date">
                    <CiCalendarDate fontSize={18} />
                    <p>1/02/24</p>
                  </div>

                  <div className="lead">
                    <div className="avatar">pH</div>
                  </div>

                  <div className="priority">
                    <IoFlagSharp fill="orange" />
                  </div>

                  <div className="docs">
                    <TbReceipt />
                    <p>mave_cv.pdf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="upload-doc user-interview">
            <div className="head">
              <div className="left">
                <RiCircleFill fill="white" />
                <p>
                  User Interview Stage <span>(1 Event)</span>
                </p>
              </div>

              <div className="right">
                <HiOutlineDotsHorizontal className="icon" />
                <MdOutlineKeyboardArrowDown className="icon" />
              </div>
            </div>

            <div className="content">
              <div className="cnt-1">
                <div className="cal-img">
                  <img src={Calendar} alt="" />
                </div>

                <div className="cal-det">
                  <p>
                    Kickoff meeting with HR and explanantion of take-home
                    assignments
                  </p>

                  <span>8 Feb 2024 -12:00 → 8 Feb 2024 -12:00</span>
                </div>
              </div>

              <div className="cnt-2">
                <div className="icn">
                  <LuBellPlus className="icon" />
                </div>
                <p>Join Google Meet</p>
              </div>
            </div>
          </div>

          <div className="upload-doc user-interview">
            <div className="head">
              <div className="left">
                <RiCircleFill fill="white" />
                <p>
                  User Interview Stage <span>(1 Event)</span>
                </p>
              </div>

              <div className="right">
                <HiOutlineDotsHorizontal className="icon" />
                <MdOutlineKeyboardArrowDown className="icon" />
              </div>
            </div>

            <div className="content">
              <div className="cnt-1">
                <div className="cal-img">
                  <img src={Calendar} alt="" />
                </div>

                <div className="cal-det">
                  <p>
                    Kickoff meeting with HR and explanantion of take-home
                    assignments
                  </p>

                  <span>8 Feb 2024 -12:00 → 8 Feb 2024 -12:00</span>
                </div>
              </div>

              <div className="cnt-2">
                <div className="icn">
                  <LuBellPlus className="icon" />
                </div>
                <p>Join Google Meet</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "timeline":
      return <div>timeline</div>;

    case "documents":
      return <div>documents</div>;

    case "task":
      return <div>documents</div>;

    case "mailing":
      return <Mailing />;
  }
};
export default OverviewDetails;
