import { jwtDecode } from "jwt-decode";
import { IDonorInformation } from "../../interfaces/user.interfaces";
import * as donateRequestService from "../../services/donateRequest.services";
import { IDonate } from "../../interfaces/donateRequest.interfaces";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";

export async function donateBlood(
  recipientId: string,
  receiverInfo: IDonorInformation,
  recipientType: string
) {
  const getToken = localStorage.getItem("token");
  const userPayload: any = jwtDecode(getToken!);
  console.log(
    `Donating blood from ${userPayload.name} to ${receiverInfo.name}`
  );

  const donorName = document.getElementById("donorName") as HTMLInputElement;
  donorName.value = userPayload.name;

  const recipientName = document.getElementById(
    "recipientName"
  ) as HTMLInputElement;
  recipientName.value = receiverInfo.name;

  const getForm = document.getElementById("donate-form");
  getForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const bloodType = (
        document.getElementById("bloodType") as HTMLInputElement
      ).value;
      const quantity = (document.getElementById("quantity") as HTMLInputElement)
        .value;
      const donationDate = (
        document.getElementById("donationDate") as HTMLInputElement
      ).value;

      const donateBlood: IDonate = {
        donorId: userPayload.id,
        recipientType: recipientType,
        recipientId: recipientId,
        bloodType: bloodType,
        quantity: parseInt(quantity),
        donationDate: new Date(donationDate),
      };

      const response = await donateRequestService.donateBlood(
        recipientId,
        donateBlood
      );
      alert(JSON.stringify(response));
      navigateTo("/");
    } catch (error) {
      console.error("Error donating blood:", error);
    }
  });
}
