import React from "react";

const DashboardCard = ({ icon, title, count, color }) => {
    return (
        <div className={`rounded-lg p-4 flex items-center ${color}`}>
            <div className="mr-4 text-white">{icon}</div>
            <div className="text-white">
                <h2 className="text-3xl font-bold">{count}</h2>
                <p className="text-sm">{title}</p>
            </div>
        </div>
    );
};

export default DashboardCard;
