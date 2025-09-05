const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});