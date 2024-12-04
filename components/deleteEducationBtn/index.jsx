export default async function DeleteEducationBtn() {
  const { error } = await supabase
    .from("educationInfo")
    .delete()
    .eq("some_column", "someValue");
  return (
    <>
      <button> Sil</button>
    </>
  );
}
