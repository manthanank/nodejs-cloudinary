const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const cloudinary = require("cloudinary");

require("dotenv").config();

const app = express();

app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use("/api", require("./routes/upload"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});