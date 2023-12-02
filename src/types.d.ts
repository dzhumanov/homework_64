export interface Post {
    title: string;
    message: string;
}

export interface FullPost {
    postId: string;
    title: string;
    message: string;
}

export interface Posts {
    [postId: string]: FullPost;
}