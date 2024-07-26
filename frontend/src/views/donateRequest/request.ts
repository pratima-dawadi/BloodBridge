import { IDonorInformation } from "../../interfaces/user.interfaces";

export function requestBlood(
  id: string,
  requesterData: IDonorInformation,
  userType: string
) {
  console.log(
    `Requesting blood to donor with ID: ${requesterData.name} and user ID: ${id}`
  );
  console.log(`Requester type: ${userType}`);
}
