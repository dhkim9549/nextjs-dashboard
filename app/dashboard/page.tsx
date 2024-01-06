import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import TChart from '@/app/ui/dashboard/t-chart';
import BChart from '@/app/ui/dashboard/b-chart';
import ButtonUsage from '@/app/ui/dashboard/m-button';
import { Button, ButtonGroup } from '@chakra-ui/react'
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  const revenue = 
    [
      {
        "month": "Jan",
        "revenue": 193
      },
      {
        "month": "Feb",
        "revenue": 993
      }
    ];

  const [
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  ] = [1233, 3939992, 33939, 4]; 

  const chartData = [
    {
      date: "Jan 22",
      SemiAnalysis: 2890,
      "The Pragmatic Engineer": 2338,
    },
    {
      date: "Feb 22",
      SemiAnalysis: 2756,
      "The Pragmatic Engineer": 2103,
    },
    {
      date: "Mar 22",
      SemiAnalysis: 3322,
      "The Pragmatic dneer": 8194,
    },
    {
      date: "Apr 22",
      SemiAnalysis: 3470,
      "The Pragmatic Engineer": 2108,
    },
    {
      date: "May 22",
      SemiAnalysis: 3475,
      "The Pragmatic Engineer": 1812,
    },
    {
      date: "Jun 22",
      SemiAnalysis: 3129,
      "The Pragmatic Engineer": 1726,
    },
  ];

  let chartData2 = ["data1", 30, 20, 50, 40, 660, 450];

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-8 lg:grid-cols-8">
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart revenue={revenue} />
        </Suspense>
      </div>
      <div className="mt-6 flex">
        <TChart chartData={chartData}/>
      </div>
      <div className="mt-6 flex">
        <BChart chartData={chartData2}/>
      </div>
      <div className="mt-6 flex">
        <ButtonUsage/>
      </div>
      <div className="mt-6 flex">
        <Button colorScheme='blue'>Button</Button>
      </div>
    </main>
  );
}
