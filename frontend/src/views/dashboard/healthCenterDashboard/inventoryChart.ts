import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import { PIE_CHART_COLORS } from "../../../utils/colors";
Chart.register(PieController, ArcElement, Tooltip, Legend);

export function inventoryChart(aggregatedData: any) {
  const labels = Object.keys(aggregatedData);
  const data = Object.values(aggregatedData);

  const ctx = document.getElementById("inventoryPieChart") as HTMLCanvasElement;
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
