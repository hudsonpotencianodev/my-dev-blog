import { CONTENTFUL_TYPES } from "@/data/constants/contentful";
import { useCallback, useEffect, useState } from "react";
import client from "@/services/contentful";

const usePostList = () => {
    const [data, setData] = useState<any[] | undefined>();

    const getContentList = useCallback(async () => {
        try {
            const entries = await client.getEntries({
                content_type: CONTENTFUL_TYPES.POST,
            });

            setData(entries.items);
        } catch (error) {
            console.log(`Error fetching posts ${error}`);
        }
    }, [])

    useEffect(() => {
        getContentList();
    }, [getContentList])

    return { data };
};

export default usePostList;