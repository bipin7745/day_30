
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const DublicatePage = () => {
const { items } = useSelector((state) => state.posts);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{textAlign:"center"}}>Duplicate Page </h2>
      
       <Link to="/third" style={{
         color: "#fff",
          padding: "8px 18px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: "500",
          marginBottom: "15px",
          marginRight:"10px",
          backgroundColor:"#007bff"}}> Go to Third Page
      </Link>
      
        <Link to="/" style={{
         color: "#fff",
          padding: "8px 18px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: "500",
          marginBottom: "15px",
          backgroundColor:"#007bff"}}> Go to Home Page
      </Link>

      {items.length === 0 ? (
      <p>No posts Found.</p>
      ) :
       (  
    <ul style={{listStyle:"none"}}>
          {items.map((post) => (
            <li style={{border:"groove", margin:"10px"}} key={post.id} >
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DublicatePage;
