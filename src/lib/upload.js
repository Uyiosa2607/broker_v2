import { supabase } from "./supabase";
import imageCompression from "browser-image-compression";

async function uploadFile(file, folder) {
  try {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);

    const { data, error } = await supabase.storage
      .from("image_database")
      .upload(`${folder}/${compressedFile.name}`, compressedFile, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Upload Error:", error.message);
      return null;
    }

    return data;
  } catch (compressionError) {
    console.error("Compression or Upload Error:", compressionError);
    return null;
  }
}

export default uploadFile;
