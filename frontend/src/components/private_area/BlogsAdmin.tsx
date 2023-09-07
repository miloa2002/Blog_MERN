import { useEffect } from "react"
import UseBlog from '../../hook/UseBlog';
import FormAdmin from "./FormAdmin";

const BlogsAdmin = () => {
    const { blogData, fetchBlogs } = UseBlog();
    useEffect(() => {
      fetchBlogs();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div className="container">
      <FormAdmin blogData={blogData && blogData} />
    </div>
  );
}

export default BlogsAdmin