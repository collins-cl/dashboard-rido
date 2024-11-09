import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.scss";

const Breadcrumb = () => {
  const location = useLocation();

  // Split the path into segments and filter out any empty segments
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      {pathnames.map((value, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={index} className="breadcrumb-item">
            .../
            {!isLast ? (
              <>
                <Link to={routeTo}>{decodeURIComponent(value)}</Link>
                <span className="separator">/</span>
              </>
            ) : (
              <span className="active-crumb">{decodeURIComponent(value)}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
