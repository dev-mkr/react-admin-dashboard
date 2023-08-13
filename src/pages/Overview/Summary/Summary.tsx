import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import useSWR from "swr";
import SummaryWidgets from "./SummaryWidgets/SummaryWidgets";
import { SummaryResponse, loadingFallback } from "./Summary.constant";
import GlobalError from "@/components/GlobalError";

const Summary = () => {
  const axiosPrivate = useAxiosPrivate();
  const { data, error, isLoading } = useSWR<SummaryResponse | undefined>(
    "/summary",
    axiosPrivate
  );

  if (error) return <GlobalError className="h-28" />;
  if (isLoading || !data) return loadingFallback;

  return <SummaryWidgets {...data?.data?.summary} />;
};

export default Summary;
