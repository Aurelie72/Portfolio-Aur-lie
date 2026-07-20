import sharp from "sharp";
import fs from "fs";

const folder = "./public/assets/";

fs.readdirSync(folder).forEach((file) => {
  if (
    file.endsWith(".png") ||
    file.endsWith(".jpg") ||
    file.endsWith(".jpeg")
  ) {
    const input = `${folder}${file}`;
    const output = `${folder}${file.split(".")[0]}.webp`;

    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`✔ Converti : ${file} → ${output}`))
      .catch((err) => console.error(`Erreur sur ${file} :`, err));
  }
});
