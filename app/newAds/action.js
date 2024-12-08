"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
const supabase = createClient();

export async function SaveJobs(prev, formData) {
  const formObj = Object.fromEntries(formData);
  const title = formObj.title;
  const company_name = formObj.company_name;
  const description = formObj.description;
  const location = formObj.location;
  const type = formObj.type;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("jobs")
    .insert({
      title,
      company_name,
      description,
      location,
      type,
      user_id: user.id,
    })
    .select();
  if (error) {
    console.log(error);
  }

  redirect("/ads");
}
