"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// ----------------------------------------signUp işlemleri
const supabase = createClient();
const defaultUserMetadata = {
  firstName: "",
  lastName: "",
  location: "",
  headline: "",
};

export async function signUp(formData) {
  console.log(formData);

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        ...defaultUserMetadata,
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        headline: formData.headline,
      },
    },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// kull. tabloya kaydet
export async function SaveUsers(formData) {
  console.log(formData);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        location: formData.location,
        headline: formData.headline,
        user_id: user?.id,
      },
    ])
    .select();
  if (error) {
    console.log(error);
  }
}

// -------------------------------------------------------------logim işlemleri
export async function login(prevState, formData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  let errors = {};
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    errors.message = "kullanıcı adı veya sifre yanlıs";
    return { errors };
  }

  revalidatePath("/", "layout"); // server taraflı state yapıyor gibi.
  redirect("/"); // kullanıcı basarılı login olursa anasayfaya yönlendiriyor.
}

// -----------------------------------------------------------Kullanıcı çıkışı (signOut)
export async function signOut() {
  console.log("buraya geldi");
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  revalidatePath("/login", "layout");
  redirect("/login");
}
