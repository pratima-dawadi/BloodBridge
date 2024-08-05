import { IRequest } from "../../interfaces/donateRequest.interfaces";
import { IDonorInformation } from "../../interfaces/user.interfaces";
import { jwtDecode } from "jwt-decode";
import * as donateRequestService from "../../services/donateRequest.services";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventHandler";
import { handleUrgency } from "./sendEmail";
import { getDetailsById } from "../../services/auth.services";

export async function requestBlood(
  supplierId: string,
  supplierData: IDonorInformation,
  supplierType: string
) {
  const getToken = localStorage.getItem("token");
  const userPayload: any = jwtDecode(getToken!);

  const supplierRole = await getDetailsById(+supplierId);

  const requesterName = document.getElementById(
    "requesterName"
  ) as HTMLInputElement;
  requesterName.value = userPayload.name;
  requesterName.disabled = true;

  const supplierName = document.getElementById(
    "supplierName"
  ) as HTMLInputElement;
  supplierName.value = supplierData.name;
  supplierName.disabled = true;

  const bloodType = document.getElementById("bloodType") as HTMLInputElement;

  if (supplierRole.userRole == "user") {
    bloodType.value = supplierData.bloodGroup;
    bloodType.disabled = true;
  }

  const getForm = document.getElementById("request-form");
  getForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const quantity = (document.getElementById("quantity") as HTMLInputElement)
        .value;
      const urgency = (document.getElementById("urgency") as HTMLInputElement)
        .checked;
      const requiredDate = (
        document.getElementById("requiredDate") as HTMLInputElement
      ).value;

      const requestBlood: IRequest = {
        requesterId: userPayload.id,
        supplierType: supplierType,
        supplierId: supplierId,
        bloodType: bloodType.value,
        quantity: parseInt(quantity),
        urgency: urgency,
        requiredDate: new Date(requiredDate),
        requestDate: new Date(),
      };

      const response = await donateRequestService.requestBlood(
        supplierId,
        requestBlood
      );

      if (urgency) {
        handleUrgency(userPayload.id, bloodType.value, supplierData.email);
      }

      alert(JSON.stringify(response));
      navigateTo("/");
    } catch (error) {
      console.error("Error donating blood:", error);
    }
  });
}
