import { IAlert } from "./IAlert";

export interface IBlog {
    id: number ,
    author: string,
    description_blog: string,
    entrace_blog: string,
    image_blog: string,
    title: string,
    todays_date?: string
}

export interface BlogContextType {
    fetchBlogs: () => Promise<IBlog[]>
    blogData: IBlog[];
    setBlogData: (value: IBlog[]) => void;
    deleteBlogFront: (id:number) => void;
    addBlogFront: (data:IBlog) => void;
    editBlogFront: (id:number, data:IBlog) => void;
    getBlogFront: (id:number) => void;
    alert: IAlert,
    setAlert: (value: IAlert) => void
}