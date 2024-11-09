import "../timeline/Timeline.scss";
import {
  IoCheckmarkCircle,
  IoMic,
  PiNotepadFill,
  PiHandHeartFill,
} from "../../Icons";

const Timeline = () => {
  return (
    <div className="hiring-timeline">
      <div className="title">Hiring Timeline</div>

      <div className="hiring-tl-progress">
        <div className="sect">
          <IoCheckmarkCircle className="icon" />
          <div className="task">
            <div className="head">Upload Documents</div>
            <p>1 Feb 2024 at 13:00</p>
          </div>
        </div>

        <div className="dot">...............</div>

        <div className="sect">
          <IoMic className="icon" fill="green" />
          <div className="task">
            <div className="head">User Interview</div>
            <p>1 Feb 2024 at 13:00</p>
          </div>
        </div>

        <div className="dot">...............</div>

        <div className="sect">
          <PiNotepadFill className="icon" fill="lightgrey" />
          <div className="task">
            <div className="head">White Boarding Test</div>
            <p>1 Feb 2024 at 13:00</p>
          </div>
        </div>

        <div className="dot">...............</div>

        <div className="sect">
          <PiHandHeartFill className="icon" fill="lightgrey" />
          <div className="task">
            <div className="head">Come Help MyLife</div>
            <p>1 Feb 2024 at 13:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
