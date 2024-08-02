import {
  Chart,
  PieController,
  ArcElement,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
Chart.register(
  PieController,
  ArcElement,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);
import { PIE_CHART_COLORS, BAR_CHART_COLORS } from "../../utils/colors";

export async function drawChart(donorGroup: any) {
  const labels = donorGroup.map((group: any) => group.bloodGroup);
  const data = donorGroup.map((group: any) => group.count);
  const ctx = document.getElementById("myChart") as HTMLCanvasElement;
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Inventory Quantity",
          data: data,
          backgroundColor: PIE_CHART_COLORS,
          borderColor: PIE_CHART_COLORS,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              label += context.raw;
              return label;
            },
          },
        },
      },
    },
  });
}

export async function drawBarGraph(donorCount: any, healthCenterCount: any) {
  const ctxBar = document.getElementById("myChart2") as HTMLCanvasElement;

  new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ["Donor Count", "Health Center Count"],
      datasets: [
        {
          label: "Count",
          data: [donorCount.count, healthCenterCount.count],
          backgroundColor: BAR_CHART_COLORS,
          borderColor: BAR_CHART_COLORS,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              label += context.raw;
              return label;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
