import BlogsHome from "../../components/BlogsHome"
import Layout from "../../container/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          <BlogsHome />
        </div>
      </div>
    </Layout>
  );
}

export default Home