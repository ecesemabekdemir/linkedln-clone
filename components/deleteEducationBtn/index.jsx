export default async function DeleteEducationBtn() {
  const { error } = await supabase
    .from("educationInfo")
    .delete()
    .eq("some_column", "someValue");

  // eğitim silme yapılcak
  return (
    <>
      <button> Sil</button>
    </>
  );
}
