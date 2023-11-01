import { DonutChart, Card } from "@tremor/react";
import Link from "next/link";

const data = [
  {
    Weather: "Sunny",
    Classmates: 10,
  },
  {
    Weather: "Snowy",
    Classmates: 5,
  },
  {
    Weather: "Cloudy",
    Classmates: 4,
  },
  {
    Weather: "Rainy",
    Classmates: 2,
  },
  {
    Weather: "Foggy",
    Classmates: 1,
  },
];

const valueFormatter = (number: number) => {
  // Use reduce method to calculate total number of classmates
  const totalClassmates = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Classmates,
    0
  );
  // Calculate the percentage and round it to a whole number
  const percentage = Math.round((number / totalClassmates) * 100);
  // Return a string
  return `${percentage}%`;
};

export default function BarChartPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-8">
      <nav>
        <Link
          href="/"
          className="dark:text-teal-400 text-indigo-600 underline hover:opacity-80"
        >
          &larr; Back home
        </Link>
      </nav>
      <div className="mx-auto max-w-2xl lg:mx-0 pt-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Donut chart
        </h2>
      </div>
      <div className="mt-12">
        <Card>
          <DonutChart
            data={data}
            valueFormatter={valueFormatter}
            index="Weather"
            category="Classmates"
            variant="pie"
          />
        </Card>
      </div>
    </main>
  );
}
