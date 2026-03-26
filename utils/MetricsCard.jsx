import React from "react";

const MetricsCard = ({ title, value, status, trend }) => {
  const getStatusColor = () => {
    if (status === "good") return "text-green-500";
    if (status === "warning") return "text-yellow-500";
    return "text-red-500";
  };

  const getTrendIcon = () => {
    if (trend === "up") return "📈";
    if (trend === "down") return "📉";
    return "➖";
  };

  return (
    <div className="p-5 rounded-2xl shadow-lg bg-white hover:shadow-xl transition">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>

      <div className="flex items-center justify-between mt-3">
        <p className="text-3xl font-bold">{value}</p>
        <span className="text-xl">{getTrendIcon()}</span>
      </div>

      <p className={`mt-2 text-sm font-medium ${getStatusColor()}`}>
        Status: {status}
      </p>

      <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${
            status === "good"
              ? "bg-green-500"
              : status === "warning"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{ width: `${Math.min(value, 100)}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MetricsCard;
