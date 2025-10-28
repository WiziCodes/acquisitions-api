import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Acquisitions API is running on port http://localhost:" + PORT);
});
