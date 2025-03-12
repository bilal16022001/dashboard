import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function ChartComponent() {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31"],
        datasets: [
          {
            label: "Applications",
            data: [5, 10, 15, 15, 20, 20, 25, 25, 30, 30, 32, 33, 34, 35, 35, 35],
            borderColor: "#00BCD4",
            backgroundColor: "rgba(0, 188, 212, 0.1)",
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false }, ticks: { color: "#666", font: { size: 12 } } },
          y: { grid: { color: "#EAEAEA", drawBorder: false }, ticks: { color: "#666", font: { size: 12 }, stepSize: 10 } },
        },
        plugins: { legend: { display: false } },
      },
    });

    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-72">
      <canvas ref={canvasRef} id="chart" className="w-full h-full"></canvas>
    </div>
  );
}
