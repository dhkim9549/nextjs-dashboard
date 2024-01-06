import { AreaChart, Card, Title } from "@tremor/react";

export default function TChart({
  chartData,
}: {
  chartData: any
}) {

  return(
    <Card>
      <Title>Newsletter revenue over time (USD)</Title>
      <AreaChart
        className="h-72 mt-4 lg:w-[500px]"
        data={chartData}
        index="date"
        categories={["SemiAnalysis", "The Pragmatic Engineer"]}
        colors={["indigo", "cyan"]}
      />
    </Card>
  );
}
