const fs = require("fs");
const path = require("path");

const TwoFiveSixImages = {
  getFullResBase64FromId: getFullResBase64FromId,
  getThumbBase64FromId: getThumbBase64FromId,
};

module.exports = TwoFiveSixImages;

function getFullResBase64FromId(id) {
  let image = fs.readFileSync(
    path.resolve(__dirname, "256art/#" + id.toString() + ".jpg")
  );
  return image.toString("base64");
}

function getThumbBase64FromId(id) {
  let image = fs.readFileSync(
    path.resolve(__dirname, "256art-thumbnail/#" + id.toString() + "-thumb.png")
  );
  return image.toString("base64");
}
