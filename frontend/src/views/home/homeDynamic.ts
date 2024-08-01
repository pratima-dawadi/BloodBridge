import {
  getDonorCount,
  getDonorGroup,
  getHealthCenterCount,
} from "../../services/count.services";
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

let navFlag = 0;
export const handleHomeDynamic = async () => {
  const donorCount = await getDonorCount();
  const healthCenterCount = await getHealthCenterCount();
  const donorGroup = await getDonorGroup();

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
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 206, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
            "rgb(255, 159, 64)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 206, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 102, 255)",
            "rgb(255, 159, 64)",
          ],
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

  const ctxBar = document.getElementById("myChart2") as HTMLCanvasElement;

  new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ["Donor Count", "Health Center Count"],
      datasets: [
        {
          label: "Count",
          data: [donorCount.count, healthCenterCount.count],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
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

  const navBarElement = document.querySelector(".navbar") as HTMLElement;

  const accessToken = localStorage.getItem("token");
  if (accessToken && navFlag == 0) {
    navFlag = 1;
    const signupUser = document.getElementById("signup-user-link");
    (signupUser as HTMLElement).style.display = "none";
    const signupHealthCenter = document.getElementById(
      "signup-healthcenter-link"
    );
    (signupHealthCenter as HTMLElement).style.display = "none";
    const login = document.getElementById("login-link");
    (login as HTMLElement).style.display = "none";
    const logout = document.createElement("a");
    logout.href = "";
    logout.id = "logout-link";
    logout.innerText = "Logout";
    logout.classList.add("nav-link");
    navBarElement.appendChild(logout);

    logout.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      window.location.href = "/";
    });
  }
};
