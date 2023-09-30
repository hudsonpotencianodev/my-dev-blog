export type PostType = {
    title: string;
    content: any;
    author: Author;
    id: string;
    publishedDate: Date
}

type Author = {
    name: string;
    avatar: Image;
}

type Image = {
    url: string;
    description: string;
}