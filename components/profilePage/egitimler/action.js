"use server";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

export async function SaveEducation(prev, formData) {
  const formObj = Object.fromEntries(formData);
  const school_name = formObj.school_name;
  const department = formObj.department;
  const section = formObj.section;
  const start_month = formObj.start_month;
  const end_month = formObj.end_month;
  const activites = formObj.activites;
  const description = formObj.description;
  const skills = formObj.skills;

  console.log("school_name :>> ", school_name);
  console.log("department :>> ", department);
  console.log("section :>> ", section);
  console.log("start_date :>> ", start_month);
  console.log("end_date :>> ", end_month);
  console.log("skills :>> ", skills);
  console.log("activites :>> ", activites);
  console.log("description :>> ", description);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const { data, error } = await supabase
    .from("educationInfo")
    .insert({
      school_name,
      department,
      section,
      start_month,
      end_month,
      activites,
      description,
      skills,
      user_id: user.id,
    })
    .select();

  if (error) {
    console.log(error);
  }
}

export default async function GetEducation() {
  const { data, error } = await supabase.from("educationInfo").select("*");

  console.log("egitimlerr :>> ", data);
}

export async function EditEducation(prev, formData) {
  const formObj = Object.fromEntries(formData);
  const school_name = formObj.school_name;
  const department = formObj.department;
  const section = formObj.section;
  const start_month = formObj.start_month;
  const end_month = formObj.end_month;
  const activites = formObj.activites;
  const description = formObj.description;
  const skills = formObj.skills;

  console.log("school_name :>> ", school_name);
  console.log("department :>> ", department);
  console.log("section :>> ", section);
  console.log("start_date :>> ", start_month);
  console.log("end_date :>> ", end_month);
  console.log("skills :>> ", skills);
  console.log("activites :>> ", activites);
  console.log("description :>> ", description);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  const { data, error } = await supabase
    .from("educationInfo")
    .update({
      school_name,
      department,
      section,
      start_month,
      end_month,
      activites,
      description,
      skills,
      user_id: user.id,
    })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
  }
}
