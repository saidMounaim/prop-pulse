"use server";

import { imagekit } from "@/lib/imagekit";

export async function uploadToImageKit(formData: FormData) {
  const file = formData.get("file") as File;

  if (!file) {
    throw new Error("No file uploaded");
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploaded = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/properties",
    });

    return uploaded.url;
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw new Error("Failed to upload image");
  }
}
