import { jwtDecode } from "jwt-decode";
import { IDonorInformation } from "../../interfaces/user.interfaces";
import * as donateRequestService from "../../services/donateRequest.services";
import { IDonate } from "../../interfaces/donateRequest.interfaces";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { getDetails } from "../../services/auth.services";
import { updateDonorInformation } from "../../services/dashboard.services";

export async function donateBlood(
  recipientId: string,
  receiverInfo: IDonorInformation,
  recipientType: string
) {
  const getToken = localStorage.getItem("token");
  const userPayload: any = jwtDecode(getToken!);

  const donorName = document.getElementById("donorName") as HTMLInputElement;
  donorName.value = userPayload.name;

  const donorDetails = await getDetails();

  // Check if the donor has donated blood in the last 90 days
  if (donorDetails.lastDonated) {
    const lastDonated = new Date(donorDetails.lastDonated);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - lastDonated.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 90) {
      alert("You have not completed 90 days since your last donation.");
      navigateTo("/");
    }
  }

  // Check if the donor is eligible to donate blood according to age and weight
  if (donorDetails.age < 18 || donorDetails.age > 60) {
    alert("Your age is not eligible to donate blood");
    navigateTo("/");
  }

  if (donorDetails.weight < 45) {
    alert("Your weight is not eligible to donate blood");
    navigateTo("/");
  }

  const recipientName = document.getElementById(
    "recipientName"
  ) as HTMLInputElement;
  recipientName.value = receiverInfo.name;

  const bloodType = document.getElementById("bloodType") as HTMLInputElement;

  if (donorDetails.userRole == "user") {
    bloodType.value = donorDetails.bloodGroup;
  }

  const getForm = document.getElementById("donate-form");
  getForm?.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const quantity = (document.getElementById("quantity") as HTMLInputElement)
        .value;
      const donationDate = (
        document.getElementById("donationDate") as HTMLInputElement
      ).value;

      const donateBlood: IDonate = {
        donorId: userPayload.id,
        recipientType: recipientType,
        recipientId: recipientId,
        bloodType: bloodType.value,
        quantity: parseInt(quantity),
        donationDate: new Date(donationDate),
      };

      const response = await donateRequestService.donateBlood(
        recipientId,
        donateBlood
      );

      if (donorDetails.userRole == "user") {
        const donorInfo = {
          lastDonated: donationDate,
          donatedCount: donorDetails.donatedCount + 1,
        };
        const updateDonor = await updateDonorInformation(donorInfo);
      }

      alert(JSON.stringify(response));
      navigateTo("/");
    } catch (error) {
      console.error("Error donating blood:", error);
    }
  });
}
