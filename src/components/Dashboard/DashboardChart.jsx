import PropTypes from "prop-types";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const DashboardChart = ({ cards }) => {
  return (
    <div className="h-[400px] border-[1px] border-primaryBorder p-5 rounded-md mt-6 lg:mt-0">
      <ResponsiveContainer>
        <BarChart data={cards}>
          <XAxis dataKey="id" />
          <YAxis />
          <Bar dataKey="id" fill="rgb(124, 58, 237)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

DashboardChart.propTypes = {
  cards: PropTypes.array,
};

export { DashboardChart };
