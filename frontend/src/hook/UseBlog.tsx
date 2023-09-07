import { useContext } from "react";
import { BlogContextType } from "../types/IBlog";
import { BlogContext } from '../context/BlogProvider';

const UseBlog = () => {
    return useContext(BlogContext) as BlogContextType
}

export default UseBlog;