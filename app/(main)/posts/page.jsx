import Posts from "@/components/posts";

export default function GetPost({ data, post_id }) {
  return (
    <>
      {data?.map((x, i) => (
        <Posts key={i} {...x} post_id={post_id} />
      ))}
    </>
  );
}
