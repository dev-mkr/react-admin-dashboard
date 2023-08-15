import GlobalSkeleton from "@/components/GlobalSkeleton";

export type SummaryDataType = {
  total_revenue: number;
  total_revenue_percentage: string;
  subscriptions: number;
  subscriptions_percentage: string;
  sales: number;
  sales_percentage: string;
  active_now: number;
  active_now_percentage: string;
  total_revenue_graph: number[];
  subscriptions_graph: number[];
  sales_graph: number[];
  active_now_graph: number[];
};

export type SummaryResponse = {
  data: { summary: SummaryDataType };
};

export const loadingFallback = (
  <div className="flex gap-5">
    <GlobalSkeleton className="h-28" />
    <GlobalSkeleton className="h-28" />
    <GlobalSkeleton className="h-28" />
    <GlobalSkeleton className="h-28" />
  </div>
);
