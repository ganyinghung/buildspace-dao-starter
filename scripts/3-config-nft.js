import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD4f23880AE40fDefB7F5D05e61760A0bA95d8492",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Issac Asimov",
        description: "This NFT will give you access to Scifidao",
        image: readFileSync("scripts/assets/asimov.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()