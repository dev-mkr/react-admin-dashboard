import { Activity, CreditCard, DollarSign, Users } from "lucide-react";

import { SummaryDataType } from "../Summary.constant";

import SummaryWidgetComponent from "./SummaryWidget/SummaryWidgetComponent";

const SummaryWidgets = (props: SummaryDataType) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <SummaryWidgetComponent
        title="Total Revenue"
        icon={DollarSign}
        value={`$${props.total_revenue.toLocaleString()}`}
        percentage={props.total_revenue_percentage}
        graphData={props.total_revenue_graph}
      />
      <SummaryWidgetComponent
        title="Subscriptions"
        icon={Users}
        value={`+${props.subscriptions.toLocaleString()}`}
        percentage={props.subscriptions_percentage}
        graphData={props.subscriptions_graph}
      />
      <SummaryWidgetComponent
        title="Sales"
        icon={CreditCard}
        value={`+${props.sales.toLocaleString()}`}
        percentage={props.sales_percentage}
        graphData={props.sales_graph}
      />
      <SummaryWidgetComponent
        title="Active Now"
        icon={Activity}
        value={`+${props.active_now.toLocaleString()}`}
        percentage={props.active_now_percentage}
        graphData={props.active_now_graph}
      />
    </div>
  );
};

export default SummaryWidgets;
