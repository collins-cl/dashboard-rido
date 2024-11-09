/* eslint-disable react/prop-types */
import "./CircularProgress.scss";

const CircularProgress = ({ percentage, name, message }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <h3>Hiring Progress</h3>
      <svg width="120" height="120" className="progress-circle">
        <circle
          className="circle-bg"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
        />
        <circle
          className="circle-progress"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth="10"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="progress-text">
        <span className="percentage">{percentage}%</span>
        <p>Complete</p>
      </div>
      <div className="progress-message">
        {name} {message}
      </div>
    </div>
  );
};

export default CircularProgress;
