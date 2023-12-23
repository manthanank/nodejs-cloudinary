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
    console.log(myCloud);
    res.json({ success: true, message: "Upload Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.remove = async (req, res) => {
  try {
    const myCloud = cloudinary.v2.uploader.destroy(req.body.imageId);
    console.log(myCloud);
    res.json({ success: true, message: "Deleted Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}