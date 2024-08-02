import { handleDashboardLoad } from "../../views/dashboard/dashboard";
import { handleHomeDynamic } from "../../views/home/homeDynamic";
import handleLogin from "../../views/login/login";
import {
  handleSignUpHealthCenter,
  handleSignUpUser,
} from "../../views/signup/signup";
import render from "../render";
import {
  adminDashboard,
  healthCenterDashboard,
  userdashboard,
} from "./dashboard.eventHandler";
import { homeEventHandlers } from "./home.eventHandlers";

export const addEventListeners = async () => {
  document
    .getElementById("home-link")
    ?.addEventListener("click", () => navigateTo("/"));
  document
    .getElementById("signup-user-link")
    ?.addEventListener("click", () => navigateTo("/signupuser"));
  document
    .getElementById("signup-healthcenter-link")
    ?.addEventListener("click", () => navigateTo("/signuphealthcenter"));
  document
    .getElementById("login-link")
    ?.addEventListener("click", () => navigateTo("/login"));
  document
    .getElementById("dashboard-link")
    ?.addEventListener("click", async () => {
      const userRole = localStorage.getItem("userRole");
      if (userRole === "user") {
        navigateTo("/userdashboard");
      } else if (userRole === "health_center") {
        navigateTo("/healthcenterdashboard");
      } else {
        navigateTo("/login");
      }
    });

  document
    .getElementById("login-form")
    ?.addEventListener("submit", handleLogin);
  document
    .getElementById("signUpUser-form")
    ?.addEventListener("submit", handleSignUpUser);
  document
    .getElementById("signUpHealthCenter-form")
    ?.addEventListener("submit", handleSignUpHealthCenter);

  homeEventHandlers();
  handleDashboardLoad();
  // handleHomeDynamic();
  userdashboard();
  healthCenterDashboard();
  adminDashboard();

  if (window.location.pathname === "/") {
    handleHomeDynamic();
  }
};

export const navigateTo = async (path: string) => {
  window.history.pushState({}, "", path);
  await render(path);
};
