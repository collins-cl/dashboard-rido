import "../toolbar/Toolbar.scss";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AvatarImg from "../../../assets/avatar.jpg";
import { BsPlusLg } from "react-icons/bs";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="time-edit">
        Last edit at <span>10.25am</span>
      </div>

      <div className="profiles">
        <AvatarGroup>
          <Avatar
            sx={{ width: 25, height: 25 }}
            alt="profile"
            src={AvatarImg}
          />
          <Avatar
            sx={{ width: 25, height: 25 }}
            alt="profile"
            src={AvatarImg}
          />
          <Avatar
            sx={{ width: 25, height: 25 }}
            alt="profile"
            src={AvatarImg}
          />
          <Avatar
            sx={{ width: 25, height: 25 }}
            alt="profile"
            src={AvatarImg}
          />
        </AvatarGroup>

        <div className="profile-invt">
          <p>Invite</p> <BsPlusLg />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
