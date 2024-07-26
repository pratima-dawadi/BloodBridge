import handleLogin from "../../views/login/login";
import {
  handleSignUpHealthCenter,
  handleSignUpUser,
} from "../../views/signup/signup";
import render from "../render";
import { homeEventHandlers } from "./home.eventHandlers";

export const addEventListeners = () => {
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
    .getElementById("login-form")
    ?.addEventListener("submit", handleLogin);
  document
    .getElementById("signUpUser-form")
    ?.addEventListener("submit", handleSignUpUser);
  document
    .getElementById("signUpHealthCenter-form")
    ?.addEventListener("submit", handleSignUpHealthCenter);

  homeEventHandlers();
};

export const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  render(path);
};
