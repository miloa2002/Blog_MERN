import connection from "../config/db.js"

//blog_travel
const getBlogs = async (req, res) => {
  try {
    const results = await (
      await connection
    ).execute(
      "SELECT todays_date,author,title,image_blog,entrace_blog,description_blog, id FROM blog_travel"
    );
    res.json(results[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }  
};

const getBlog = async(req, res) => {
  try {
    const {id} = req.params;
    const result = await (
      await connection
    ).execute(`SELECT * FROM blog_travel WHERE id = ${id}`);
    res.json(result[0])
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
}

const addBlog = async(req, res) => {
  const todays_date = req.body.todays_date;
  const author = req.body.author;
  const title = req.body.title;
  const image_blog = req.body.image_blog;
  const entrace_blog = req.body.entrace_blog;
  const description_blog = req.body.description_blog;

  try {
    const results = await(await connection).execute(
      "INSERT INTO blog_travel (todays_date,author,title,image_blog,entrace_blog,description_blog) VALUES (?,?,?,?,?,?)",
      [new Date(), author, title, image_blog, entrace_blog, description_blog]
    );

    if(results.affectedRows > 0){
      res.status(400).json({msg: "Error al crear el blog"});
    }else{
      res.status(201).json({msg: "Blog creado correctamente"});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error en el servidor"});
  }
};

const deleteBlog = async (req, res) => {
  const {id} = req.params;
  try {

    const [results] = await(await connection).execute(
      `SELECT * FROM blog_travel WHERE id = ?`,[id]
    )

    if(!results[0]){
      res.status(404).json({ msg: "Blog no encontrado" });
      return
    }

    await (await connection).execute(`DELETE FROM blog_travel WHERE id = ${id}`);
    res.json({msg: "Blog eliminado correctamente"});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error en el servidor"});
  }
}

const updateBlog = async (req, res) => {
  const {id} = req.params;
  const todays_date = req.body.todays_date;
  const author = req.body.author;
  const title = req.body.title;
  const image_blog = req.body.image_blog;
  const entrace_blog = req.body.entrace_blog;
  const description_blog = req.body.description_blog;

  try {
    const [results] = await (
      await connection
    ).execute(`SELECT * FROM blog_travel WHERE id = ?`, [id]);

    if (!results[0]) {
      res.status(404).json({ msg: "Blog no encontrado" });
      return;
    }

    await (
      await connection
    ).execute(
      `UPDATE blog_travel SET todays_date=?,author=?,title=?,image_blog=?,entrace_blog=?,description_blog=? WHERE id=?`,
      [new Date(), author, title, image_blog, entrace_blog, description_blog, id]
    );
    res.json({msg: "Blog actualizado correctamente"});
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Error en el servidor"});
  }
}


export { getBlogs, getBlog, addBlog, deleteBlog, updateBlog };