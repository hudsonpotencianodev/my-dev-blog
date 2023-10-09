import { QUERY_KEYS } from "@/data/constants/contentful";
import { PostType } from "@/services/index.types";
import getPost from "@/services/post";
import { useQuery } from "@tanstack/react-query";

const usePost = (id: string) => useQuery({
    queryKey: [QUERY_KEYS.POST, id],
    queryFn: () => getPost(id),
    enabled: !!id,
    select: data => ({
        id: data.sys.id,
        title: data.title,
        author: {
            name: data.author.name,
            avatar: {
                url: data.author.avatar.url,
                description: data.author.avatar.description
            }
        },
        content: data.content.json,
        publishedDate: data.publishedDate
    } as PostType),
});

export default usePost;