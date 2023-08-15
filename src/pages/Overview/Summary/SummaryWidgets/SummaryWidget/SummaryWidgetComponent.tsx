import GlobalChart from "@/components/GlobalChart/GlobalChart";
import { WIDGET_CHART_OPTIONS } from "@/components/GlobalChart/GlobalChart.constant";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DIALOG_CHART_OPTIONS,
  SummaryWidgetProps,
} from "./SummaryWidgetComponent.constant";

const SummaryWidget: React.FC<SummaryWidgetProps> = ({
  title,
  icon: Icon,
  value,
  percentage,
  graphData,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="flex-1">
        <section className="rounded-lg border bg-card p-3 text-card-foreground shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <span className="text-sm font-medium">{title}</span>
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex gap-2">
            <span className="text-start">
              <span className="text-2xl font-bold">{value}</span>
              <p className="mt-1 whitespace-nowrap text-xs text-muted-foreground">
                {percentage} from last month
              </p>
            </span>
            <span className="h-20 max-w-[10rem]">
              <GlobalChart
                options={WIDGET_CHART_OPTIONS}
                series={[{ data: graphData }]}
                type="area"
              />
            </span>
          </div>
        </section>
      </DialogTrigger>
      <DialogContent className="px-2 md:p-4">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{percentage} from last month</DialogDescription>
        </DialogHeader>
        <GlobalChart
          options={DIALOG_CHART_OPTIONS}
          series={[{ data: graphData, name: title }]}
          type="area"
          height={400}
        />
      </DialogContent>
    </Dialog>
  );
};

export default SummaryWidget;
