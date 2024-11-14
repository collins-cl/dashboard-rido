import "./Mailing.scss";
import { TbBellRingingFilled, BiSolidMessageAdd, CiMail } from "../../Icons";

const Mailing = () => {
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
        
      </div>
    </div>
  );
};

export default Mailing;
