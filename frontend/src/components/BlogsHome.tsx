import { Link } from "react-router-dom";
import UseBlog from "../hook/UseBlog";
import { useEffect } from 'react';

const BlogsHome = () => {
  const { blogData, fetchBlogs } = UseBlog();
  
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {blogData.map((blogDataOne, i) => (
        <div className="border-2 border-slate-100 mt-8" key={i}>
          <img src={blogDataOne.image_blog} alt={blogDataOne.title} />
          <div className="p-8 text-center">
            <div className="my-4 flex justify-between items-center">
              <p className="text-gray-400 text-sm text-left">
                {blogDataOne.author}
              </p>
              <p className="text-gray-400 text-sm text-right">
                {blogDataOne.todays_date}
              </p>
            </div>
            <p className="title text-3xl mb-3">{blogDataOne.title}</p>
            <p className="mt-4 text-gray-800 mb-8">
              {blogDataOne.description_blog.substring(0, 180) + "..."}
            </p>
            <Link
              className="font-bold py-2 px-8 bg-blue-500 text-white rounded-md  transition-colors"
              to={`/blog/${blogDataOne.id}`}
            >
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsHome;
