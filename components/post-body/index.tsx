import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Props {
    content: any;
}

const PostBody = ({ content }: Props) => (
    <div>
        {content && documentToReactComponents(content)}
    </div>
)

export default PostBody;