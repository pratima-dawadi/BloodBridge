import axios from "axios";

export async function filterUser(
  name: string,
  district: string,
  location: string,
  bloodGroup: string
) {
  const response = await axios.get(
    `http://localhost:3000/filter/user?name=${name}&district=${district}&location=${location}&bloodGroup=${bloodGroup}`
  );
  console.log(`Response from filterUser:`, JSON.stringify(response.data));
  return response.data;
}

export async function filterHealthCenter(
  name: string,
  district: string,
  location: string,
  bloodGroup: string
) {
  const response = await axios.get(
    `http://localhost:3000/filter/healthcenter?name=${name}&district=${district}&location=${location}&bloodGroup=${bloodGroup}`
  );
  console.log(
    `Response from filterHealthCenter:`,
    JSON.stringify(response.data)
  );
  return response;
}
