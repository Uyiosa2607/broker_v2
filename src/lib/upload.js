import { supabase } from "./supabase";

async function uploadFile(file) {
  try {
    const { data, error } = await supabase.storage
      .from("image_database")
      .upload(`images/${file.name}`, file, {
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
