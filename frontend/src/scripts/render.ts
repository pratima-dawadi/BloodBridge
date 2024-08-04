import { getDetails } from "../views/home/details";
import {
  handleDonationCampList,
  handleDonorList,
  handleHealthCenterList,
} from "../views/home/home";
import { addEventListeners } from "./eventHandlers/auth.eventHandler";
import router from "./routes";

const render = async (pathname: string) => {
  const content = await router.resolve({ pathname });

  if (typeof content !== "string") {
    console.error("Content is not a string");
    return;
  }

  const contentElement = document.getElementById("content");

  if (contentElement) {
    contentElement.innerHTML = content;

    await addEventListeners();

    if (pathname === "/getlist-healthcenter") {
      handleHealthCenterList();
    } else if (pathname === "/getlist-donor") {
      handleDonorList();
    } else if (pathname === "/getlist-donationcamp") {
      handleDonationCampList();
    } else if (pathname === "/details") {
      const id = new URLSearchParams(window.location.search).get("id");
      if (id) {
        getDetails(id);
      }
    }
  } else {
    console.error("Content element not found");
  }
};

export default render;
