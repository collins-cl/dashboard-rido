/* eslint-disable react/prop-types */
import "./Mailing.scss";
import "./MailingModal.css";
import {
  TbBellRingingFilled,
  BiSolidMessageAdd,
  CiMail,
  FaRegFloppyDisk,
  LiaTimesSolid,
} from "../../Icons";
import { BsPlusLg } from "react-icons/bs";
import { FcOpenedFolder } from "../../Icons";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AVI from "../../assets/profileavi.jpg";

const Mailing = () => {
  const [newmail, setNewMail] = useState(false);

  return (
    <div className="mailing-sect">
      <div className="mailing-temp">
        <div className="title">Email template</div>

        <div className="options">
          <div className="opt-cards">
            <TbBellRingingFilled className="icon mail" />
            <div className="info">
              <p>Reminder Mail</p>
              <span>Email template to send reminder</span>
            </div>
          </div>

          <div className="opt-cards">
            <BiSolidMessageAdd className="icon" fill="purple" />
            <div className="info">
              <p>Announcement</p>
              <span>Email template to send announcement</span>
            </div>
          </div>

          <div className="opt-cards">
            <CiMail className="icon" fill="orange" />
            <div className="info">
              <p>Evaluation Mail</p>
              <span>Email template to send evaluation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mailing-post">
        <div className="head">
          <p>Mailing Post</p>

          <div className="new-mail" onClick={() => setNewMail(true)}>
            <BsPlusLg />
            <span>New Mail</span>
          </div>
        </div>

        <div className="mail-content">
          <div className="no-mail-content">
            <div className="info">
              <FcOpenedFolder className="icon" />
              <p>You have never sent an email to this candidate</p>
            </div>
          </div>

          {/* <MailContent /> */}
        </div>
      </div>

      <div className="new-message">
        <CreateMail newmail={newmail} setNewMail={setNewMail} />
      </div>
    </div>
  );
};

// const MailContent = () => {
//   return <div className="mail-cnt"></div>;
// };

export const CreateMail = ({ newmail, setNewMail }) => {
  return (
    <div className="create-mail">
      <Modal
        open={newmail}
        onClose={() => {
          setNewMail(false);
        }}
        sx={{ background: "rgba(85, 83, 83, 0.576)" }}
      >
        <div className="custom-modal">
          <div className="custom-modal-header">
            <LiaTimesSolid />
            <span>Create New Mail</span>
          </div>

          <div className="new-mail-cnt">
            <div className="header"> Email will send to</div>

            <div className="profile">
              <div className="img">
                <img src={AVI} alt="" />
              </div>
              <div className="info">
                <p>Mike Wazowski</p>
                <span>mikewazoski@gmail.com</span>
              </div>
            </div>

            <form action="">
              <div className="form-cnt">
                <div className="first-sect">
                  <div className="head">Text Your Mail</div>

                  <div className="subject">
                    <label htmlFor="subject">Mail Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="UX designer ...."
                    />
                  </div>

                  <div className="subject body">
                    <label htmlFor="body">Email Body</label>
                    <textarea
                      name="body"
                      placeholder="Type your subject mail"
                    />
                  </div>

                  <div className="variables">
                    <div className="prompt">
                      <p>You can insert variables by typing</p>
                      <input
                        type="text"
                        name="variables"
                        className="variables"
                        placeholder="{"
                      />
                    </div>
                  </div>
                </div>

                <div className="second-sect">
                  <div className="head">
                    <p>Scheduling mail</p>
                    <input type="radio" name="" id="" />
                  </div>

                  <div className="mail-duration">
                    <div className="send-date">
                      <label htmlFor="date">Mail will send on</label>

                      <input type="date" name="" id="" />
                    </div>

                    <div className="send-date">
                      <label htmlFor="time">At</label>

                      <input type="time" name="" id="" />
                    </div>
                  </div>
                </div>

                <div className="send">
                  <div className="save">
                    <FaRegFloppyDisk />
                    <p>Save</p>
                  </div>

                  <div className="save">
                    <FaRegFloppyDisk />
                    <p>Save</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Mailing;
