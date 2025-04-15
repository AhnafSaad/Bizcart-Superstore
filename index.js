const app = require("./app");
const PORT = process.env.PORT || 5000; // Uses Render's port or defaults to 5000

app.listen(PORT, '0.0.0.0', () => {  // '0.0.0.0' allows external connections
  console.log(`App running on port ${PORT}`); // Now logs the correct port
});
