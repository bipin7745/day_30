// src/pages/Home.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);


  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Home List Page</h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link
          to="/duplicate"
          style={{
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: "500",
            backgroundColor: "#007bff",
          }}
        >
          Go to Duplicate Page
        </Link>
      </div>

    {status === "loading" ? (
 <p style={{ textAlign: "center" }}>⏳ Loading posts...</p>
) 
: status === "failed" ?
 (
  <p style={{ color: "red", textAlign: "center" }}>
     Error: {error || "Something went wrong!"}
  </p>
)
 :
 status === "succeeded" && items.length === 0 ? (
  <p style={{ textAlign: "center" }}>No posts found.</p>
) :
 (
  <ul style={{ listStyle: "none", padding: 0 }}>
    {items.map((post) => (
      <li
        key={post.id}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          margin: "10px 0",
        }}
      >
        <strong>{post.title}</strong>
        <p>{post.body}</p>
      </li>
    ))}
  </ul>
)}

    </div>
  );
};

export default Home;
