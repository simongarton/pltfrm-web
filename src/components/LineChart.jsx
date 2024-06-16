import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import PropTypes from "prop-types";

export default function LineChart({ options, data }) {
  return <Line options={options} data={data} />;
}

LineChart.propTypes = {
  options: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
