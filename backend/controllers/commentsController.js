import connection from "../config/db.js";

const getComments= async(req, res) => {
    const blog_id = req.body.blog_id;

    try {
        const [results] = await (
          await connection
        ).execute("SELECT * FROM comments WHERE blog_id=?", [blog_id]);
        res.json(results)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error en el servidor"});
    }
}

const addComment = async(req, res) => {
    const author_comment = req.body.author_comment;
    const description_comment = req.body.description_comment;
    const blog_id = req.body.blog_id;

    try {
        const [isBlog] = await (await connection).execute("SELECT * FROM blog_travel WHERE id=? ", [blog_id]);
        
        if(isBlog.length === 0){
            res.status(404).json({msg: "Blog no encontrado"});
            return;
        }
        
        await (
          await connection
        ).execute(
          "INSERT INTO comments (todays_date_comment, author_comment, description_comment, blog_id) VALUES (?,?,?,?)",
          [new Date(), author_comment, description_comment, blog_id]
        );

        res.status(201).json({msg: "Comentario creado exitosamente"});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error en el servidor"})
    }
}

export {
    getComments,
    addComment
}