import React, { useState } from 'react';
import { IBlog } from '../../types/IBlog';
import UseBlog from '../../hook/UseBlog';
import Alert from '../Alert';

interface BlogDataAdminProps {
  blogData: IBlog[];
}

const FormAdmin = ({ blogData }: BlogDataAdminProps) => {
  const { addBlogFront, alert, setAlert } = UseBlog();
  const { deleteBlogFront, editBlogFront } = UseBlog();
  const [editBlogData, setEditBlogData] = useState<IBlog>();
  const [isEdit, setIsEdit] = useState<boolean>();

  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description_blog, setDescription_blog] = useState<string>("");
  const [entrace_blog, setEntrace_blog] = useState<string>("");
  const [image_blog, setImage_blog] = useState<string>("");

  const data: IBlog = {
    author,
    description_blog,
    entrace_blog,
    image_blog,
    title,
    id: 0,
  };


  //EDIT
  const editBlog = (id: number) => {
    const blogToEdit = blogData.find((blog) => blog.id === id);

    if (blogToEdit) {
      setEditBlogData(blogToEdit);
      setAuthor(blogToEdit?.author);
      setTitle(blogToEdit?.title);
      setDescription_blog(blogToEdit?.description_blog);
      setEntrace_blog(blogToEdit?.entrace_blog);
      setImage_blog(blogToEdit?.image_blog);
    }
    setIsEdit(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dataEdit: IBlog = {
      author,
      description_blog,
      entrace_blog,
      image_blog,
      title,
      id: editBlogData?.id || 0,
    };

    if (isEdit) {
      if(editBlogData){
        editBlogFront(editBlogData.id, dataEdit);
        setEditBlogData(undefined);
        setAlert({
          tipo: "edited",
          message: "Blog editado correctamente"
        })
      }
      setIsEdit(false)
      resetFormFields()
    } else {
      if (
        !author ||
        !description_blog ||
        !entrace_blog ||
        !image_blog ||
        !title
      ) {
        setAlert({
          tipo: "emptyFields",
          message: "Todos los campos deben estar llenos",
        });
        return;
      }
      addBlogFront(data);

      resetFormFields()
    }
  };

  const resetFormFields = () => {
    setAuthor("");
    setTitle("");
    setDescription_blog("");
    setEntrace_blog("");
    setImage_blog("");
  };

  setTimeout(() => {
    setAlert({
      tipo: "",
      message: "",
    });
  }, 8000);

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8">
        {alert.tipo == "deleted" && <Alert />}
        {alert.tipo == "edited" && <Alert />}
        {alert.tipo == "emptyFields" && <Alert />}
        <div className="mb-4">
          <label htmlFor="author">Autor</label>
          <input
            className="w-full outline-none border-gray-200 border-2 p-2"
            type="text"
            id="author"
            placeholder="Autor"
            defaultValue={editBlogData ? editBlogData.author : author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="titulo">Titulo</label>
          <input
            className="w-full outline-none border-gray-200 border-2 p-2"
            type="text"
            id="titulo"
            placeholder="Titulo del blog"
            defaultValue={editBlogData ? editBlogData.title : title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            placeholder="Descripción del blog"
            className="w-full outline-none border-gray-200 border-2 p-2"
            defaultValue={
              editBlogData ? editBlogData.description_blog : description_blog
            }
            onChange={(e) => setDescription_blog(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="entrace">Entrada</label>
          <textarea
            id="entrace"
            placeholder="Entrada del blog"
            className="w-full outline-none border-gray-200 border-2 p-2"
            defaultValue={
              editBlogData ? editBlogData.entrace_blog : entrace_blog
            }
            onChange={(e) => setEntrace_blog(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image">Imagen</label>
          <input
            className="w-full outline-none border-gray-200 border-2 p-2"
            type="text"
            id="image"
            placeholder="Link imagen del blog"
            defaultValue={editBlogData ? editBlogData.image_blog : image_blog}
            onChange={(e) => setImage_blog(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value={isEdit ? "Editar blog" : "Crear blog"}
          className="w-full cursor-pointer outline-none bg-blue-500 font-bold text-white p-2 hover:bg-blue-700 transition-colors mb-4"
        />
        {alert.tipo == "add" && <Alert />}
      </form>

      <div className="grid grid-cols-4 gap-8">
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
              <p className="mt-4 text-gray-400">{blogDataOne.entrace_blog}</p>
              <p className="mt-4 text-gray-800">
                {blogDataOne.description_blog}
              </p>

              <div className="flex justify-between items-center mt-8 mb-4">
                <button
                  onClick={() => editBlog(blogDataOne.id)}
                  className="font-bold py-2 px-8 bg-blue-500 text-white rounded-md  transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteBlogFront(blogDataOne.id)}
                  className="font-bold py-2 px-8 bg-red-600 text-white rounded-md  transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormAdmin