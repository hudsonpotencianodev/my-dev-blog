import { QUERY_KEYS } from "@/data/constants/contentful";
import { PostType } from "@/services/index.types";
import getPostList from "@/services/post-list";
import { useQuery } from "@tanstack/react-query";

const usePostList = () => useQuery({
    queryKey: [QUERY_KEYS.POSTLIST],
    queryFn: () => getPostList(),
    select: data => data.map((post: any) => ({
        id: post.sys.id,
        title: post.title,
        author: {
            name: post.author.name,
            avatar: {
                url: post.author.avatar.url,
                description: post.author.avatar.description
            }
        },
        publishedDate: post.publishedDate
    } as PostType)),
});

export default usePostList;