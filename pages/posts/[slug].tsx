import PostBody from "@/components/post-body";
import usePost from "@/hooks/use-post";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { data: post } = usePost(router.query.slug as string);
  return <>
    {router.isFallback && <div>Loading...</div>}
    {post && <PostBody key={post.fields.title} content={post.fields.content}></PostBody>}
  </>
}