import { useNavigate } from "react-router-dom";

const Third = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px",
      }}
    >
      <h1>Third Page</h1>
      <div style={{ marginTop: "20px" }}>
     <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#007bff",color: "white",padding: "10px 20px",border: "none", borderRadius: "8px", margin: "10px", cursor: "pointer",
         }}
        >
          Home
        </button>

        <button
          onClick={() => navigate("/duplicate")}
          style={{
            backgroundColor: "#007bff",color: "white", padding: "10px 20px", border: "none",borderRadius: "8px",margin: "10px",cursor: "pointer",
          }}
        >
          Go To Back
        </button>
      </div>
    </div>
  );
};

export default Third;
