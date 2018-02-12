const express = require("express");
const multer = require("multer");
let upload = multer({ dest: "uploads/" });
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.single("up"), (req, res) => {
    res.send(`Size: ${req.file.size}`);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));