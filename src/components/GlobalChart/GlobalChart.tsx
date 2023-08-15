import ReactApexChart from "react-apexcharts";

type ReusableApexChartProps = {
  options: ApexCharts.ApexOptions;
  series: ApexCharts.ApexOptions["series"];
  type?: ApexChart["type"];
  width?: string | number;
  height?: string | number;
};

const ReusableApexChart: React.FC<ReusableApexChartProps> = ({
  options,
  series,
  type = "line",
  width,
  height = "100%",
}) => {
  const chartOptions: ApexCharts.ApexOptions = {
    ...options,
    xaxis: {
      ...options.xaxis,
      categories: options.xaxis?.categories || [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default ReusableApexChart;
