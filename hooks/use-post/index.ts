import client from "@/services/contentful";
import { useCallback, useEffect, useState } from "react";

const usePost = (id: string) => {
    const [data, setData] = useState<any | undefined>();

    const getContent = useCallback(async () => {
        try {
            const entries = await client.getEntry(id, { include: 1 });
            setData(entries);
        } catch (error) {
            console.log(`Error fetching posts ${error}`);
        }
    }, [id])

    useEffect(() => {
        getContent();
    }, [id, getContent])

    return { data };
};

export default usePost;