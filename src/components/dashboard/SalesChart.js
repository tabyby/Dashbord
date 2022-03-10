import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Users",
        data: [0, 5, 6, 10, 15, 18, 20, 40],
      },
      {
        name: "Doctors",
        data: [0, 5, 8, 9, 10, 13, 17, 21],
      },
      {
        name:"appointments",
        data : [0,2,3,5,10,12,18,20]
      }
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          // "Jan",
          "Feb",
          "March",
          "April",
          // "May",
          // "June",
          // "July",
          // "Aug",
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Activity Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Users and Doctors
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
