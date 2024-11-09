import Breadcrumb from "../breadcrumb/Breadcrumb";
import Toolbar from "./toolbar/Toolbar";
import "../Topbar/Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <Breadcrumb />

      <Toolbar />
    </div>
  );
};

export default Topbar;
