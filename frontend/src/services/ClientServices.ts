import api from "../api/api";
import { IBlog } from '../types/IBlog';

export default {
    getBlogs(){
        return api.get("/api/v1/blog");
    },
    getBlog(id:number){
        return api.get(`/api/v1/blog/${id}`)
    },
    addBlog(data:IBlog){
        return api.post("/api/v1/blog", data) 
    },
    deleteBlog(id:number){
        return api.delete(`/api/v1/blog/${id}`)
    },
    editBlog(id:number, newData:IBlog){
        const url = `api/v1/blog/${id}`
        return api.put(url, newData);
    }
};