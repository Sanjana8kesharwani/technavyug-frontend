import { useNavigate } from "react-router-dom";
import { blogsData } from "../../data/blogData";

export default function Blogs() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 sm:space-y-8 overflow-x-hidden">
      {blogsData.map((blog) => (
        <div key={blog.id} className="w-full break-words">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
            {blog.title}
          </h3>

          <span
            onClick={() =>
              navigate(`/blog/${blog.id}`, {
                state: blog,
              })
            }
            className="inline-block mt-2 text-sm sm:text-base text-blue-600 cursor-pointer hover:text-blue-700 transition break-words"
          >
            Read More...
          </span>
        </div>
      ))}
    </div>
  );
}
