import { supabase } from "./supabase";

async function uploadFile(file, folder) {
  try {
    const { data, error } = await supabase.storage
      .from("image_database")
      .upload(`${folder}${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) return;

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default uploadFile;
