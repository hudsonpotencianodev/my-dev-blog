import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from './index.module.scss';

interface Props {
    content: any;
}

const PostBody = ({ content }: Props) => (
    <div className={classes.postBody}>
        {content && documentToReactComponents(content)}
    </div>
)

export default PostBody;