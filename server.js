const jsonServer = require("json-server");
const axios = require("axios");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.use(middlewares);
server.use(router);

server.use(jsonServer.bodyParser);
/*server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});*/

axios
  .get("https://my-json-server.typicode.com/ioAcademy-NunoJeronimo/iot/users")
  .then(function (response) {
    // handle success
    //console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

axios
  .post(
    "https://my-json-server.typicode.com/ioAcademy-NunoJeronimo/iot/users",
    {
      acc_x: 0.15493527054786682,
      acc_y: 2.7355945110321045,
      acc_z: 9.604789733886719,
      gyr_x: -0.09376505762338638,
      gyr_y: 0.261442631483078,
      gyr_z: -0.15897299349308014,
      time_difference: 0.032,
      timestamp: 1638369965595,
    }
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

server.listen(port);
