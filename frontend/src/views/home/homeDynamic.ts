import {
  getDonorCount,
  getDonorGroup,
  getHealthCenterCount,
} from "../../services/count.services";
import { drawBarGraph, drawChart } from "./chart";

let navFlag = 0;
export const handleHomeDynamic = async () => {
  const donorCount = await getDonorCount();
  const healthCenterCount = await getHealthCenterCount();
  const donorGroup = await getDonorGroup();

  await drawChart(donorGroup);

  await drawBarGraph(donorCount, healthCenterCount);

  const accessToken = localStorage.getItem("token");

  const dashboard = document.getElementById("dashboard-link");
  dashboard!.style.display = "none";

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

    const dashboard = document.getElementById("dashboard-link");
    (dashboard as HTMLElement).style.display = "block";
  }
};
