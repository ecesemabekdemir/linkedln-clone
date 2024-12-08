import Posts from "@/components/posts";

export default async function GetPost({ data }) {
  return (
    <>
      {data?.map((x, i) => (
        <Posts key={i} {...x} />
      ))}
    </>
  );
}
