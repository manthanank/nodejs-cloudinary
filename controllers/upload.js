const cloudinary = require("cloudinary");

exports.upload = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(
      req.body.image,
      {
        folder: "gallery",
        width: 150,
        crop: "scale",
      }
    );
    res.json({ success: true, message: "Upload Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}