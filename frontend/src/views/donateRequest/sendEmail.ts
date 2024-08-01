import { getDetailsById } from "../../services/auth.services";
import { sendUrgencyMail } from "../../services/donateRequest.services";

export async function handleUrgency(
  id: string,
  bloodType: string,
  emailRecipient: string
) {
  const getUserName = await getDetailsById(+id);
  console.log(`Urgency request from ${getUserName.name}`);
  const mail = {
    to: emailRecipient,
    subject: "Urgency Blood Request",
    text: `Urgency request for ${bloodType} blood from ${getUserName.name}.
      Contact Details:
      Name: ${getUserName.name}
      Email: ${getUserName.email}
      Phone: ${getUserName.phone}
      Location: ${getUserName.location}, ${getUserName.district}`,
  };
  const response = await sendUrgencyMail(mail);
  alert(response);
}
