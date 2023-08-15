export const DIALOG_CHART_OPTIONS = {
  chart: {
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    forceNiceScale: true,
    tickAmount: 10,
  },
};

export type SummaryWidgetProps = {
  title: string;
  icon: React.ElementType;
  value: string;
  percentage: string;
  graphData: number[];
};
