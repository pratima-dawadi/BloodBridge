import UniversalRouter from "universal-router";
const routes = [
  {
    path: "/",
    action: async () =>
      fetch("./src/views/home/home.html").then((response) => response.text()),
  },

  {
    path: "/login",
    action: async () =>
      fetch("./src/views/login/login.html").then((response) => response.text()),
  },

  {
    path: "/signupuser",
    action: async () =>
      fetch("./src/views/signup/signupUser.html").then((response) =>
        response.text()
      ),
  },

  {
    path: "/signuphealthcenter",
    action: async () =>
      fetch("./src/views/signup/signupHealthCenter.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/getlist-healthcenter",
    action: async () =>
      fetch("./src/views/home/getList.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/getlist-donor",
    action: async () =>
      fetch("./src/views/home/getList.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/getlist-donationcamp",
    action: async () =>
      fetch("./src/views/home/getList.html").then((response) =>
        response.text()
      ),
  },

  {
    path: "/details",
    action: async () =>
      fetch("./src/views/home/details.html").then((response) =>
        response.text()
      ),
  },

  {
    path: "/requestblood",
    action: async () =>
      fetch("./src/views/donateRequest/request.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/donateblood",
    action: async () =>
      fetch("./src/views/donateRequest/donate.html").then((response) =>
        response.text()
      ),
  },
  {
    path: "/userdashboard",
    action: async () =>
      fetch("./src/views/dashboard/userDashboard/userDashboard.html").then(
        (response) => response.text()
      ),
  },
  {
    path: "/healthcenterdashboard",
    action: async () =>
      fetch(
        "./src/views/dashboard/healthCenterDashboard/healthCenterDashboard.html"
      ).then((response) => response.text()),
  },
  {
    path: "/admindashboard",
    action: async () =>
      fetch("./src/views/dashboard/adminDashboard/adminDashboard.html").then(
        (response) => response.text()
      ),
  },
];

const router = new UniversalRouter(routes);

export default router;
