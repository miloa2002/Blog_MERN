/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import ClientServices from "../services/ClientServices";
import { useState, useEffect } from 'react';
import { IBlog } from "../types/IBlog";

const OneBlog = () => {
    const [blogDataOne, setBlogDataOne] = useState<IBlog[]>([]);
    const params = useParams();

    const getBlogFront = async (id: number) => {
      try {
        const response = await ClientServices.getBlog(id);
        setBlogDataOne(response.data);
    } catch (error) {
        console.log(error);
    }
};

    useEffect(()=>{
        getBlogFront(Number(params.id))
    }, [])
    
  return (
    <>
      {blogDataOne.map((blog) => (
        <div className="container" key={blog.id}>
          <img
            className="mt-12 h-80 w-full object-cover"
            src={blog.image_blog}
            alt=""
          />
          <div className="my-8">
            <h1 className="text-3xl mb-3">{blog.title}</h1>
            <p className="text-gray-400 text-sm">Autor: {blog.author}</p>
          </div>
          <p className="text-gray-400 mb-5">{blog.entrace_blog}</p>
          <div className="text-gray-800">
            <p>{blog.description_blog}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default OneBlog