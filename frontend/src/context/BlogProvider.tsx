import { AxiosResponse } from "axios";
import { createContext, useState } from "react";
import { IBlog } from "../types/IBlog";
import ClientServices from "../services/ClientServices";
import { IAlert } from '../types/IAlert';

export const BlogContext = createContext({});

interface props {
  children: JSX.Element | JSX.Element[];
}

const BlogProvider = ({ children }: props) => {

  const [alert, setAlert] = useState<IAlert>({
    tipo: "",
    message: "",
  });

  const [blogData, setBlogData] = useState<IBlog[]>([]);

  const fetchBlogs = async () => {
    try {
      const response: AxiosResponse = await ClientServices.getBlogs();
      setBlogData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlogFront = async (id: number) => {
    try {
      const response = await ClientServices.deleteBlog(id);
      setAlert({
        tipo: "deleted",
        message: response.data.msg,
      });
      setBlogData(blogData.filter((blogFront) => blogFront.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addBlogFront = async (data: IBlog) => {
    try {
      const response = await ClientServices.addBlog(data);
      setAlert({
        tipo: "add",
        message: response.data.msg
      });
      
      setBlogData([...blogData, response.data]);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const editBlogFront = async(id: number, newData:IBlog ) => {
    try {
      const response = await ClientServices.editBlog(id, newData);
      const updateBlogs = blogData.map((blog) => 
        blog.id === id ? {...blog, ...newData} : blog
      )
      setAlert({
        tipo: "add",
        message: response.data.msg,
      });
      setBlogData(updateBlogs)
      
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <BlogContext.Provider
      value={{
        blogData,
        setBlogData,
        deleteBlogFront,
        addBlogFront,
        fetchBlogs,
        alert,
        setAlert,
        editBlogFront,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
