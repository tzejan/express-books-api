require('dotenv').config();
const app = require("./app");

const server = app.listen(process.env.PORT || 3000, function() {
  console.log(`App listening on port ${server.address().port}...`);
});
