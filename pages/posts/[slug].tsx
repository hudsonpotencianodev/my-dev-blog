import React from 'react';
import Avatar from "@/components/avatar";
import PostBody from "@/components/post-body";
import usePost from "@/hooks/use-post";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { data: post, isLoading } = usePost(router.query.slug as string);
  return <>
    {isLoading && <div>Loading...</div>}
    {!isLoading && post &&
      <div>
        <Avatar src={post.author.avatar.url} alt={post.author.avatar.description}/>
        <PostBody key={post.id} content={post.content}></PostBody>
      </div>}
  </>
}