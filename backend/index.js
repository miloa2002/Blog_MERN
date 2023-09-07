import express from "express";
import cors from "cors";
import router from "./router/router.js";
import routerComment from "./router/routerComment.js"

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/v1/blog", router);
app.use("/api/v1/comment", routerComment);

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
})