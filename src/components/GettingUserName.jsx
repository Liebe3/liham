import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";

function GettingUserName() {
  const [name, setName] = useState("");
  const [isFamilyChecked, setIsFamilyChecked] = useState(false);
  const [isStudyChecked, setIsStudyChecked] = useState(false);
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFamilyChecked && !isStudyChecked) {
      setError("Please select at least one option.");
      return;
    }
    setError("")
    // Navigate to different routes based on the checkboxes
    if (isFamilyChecked && isStudyChecked) {
      navigate("/letter-for-working-students", { state: { userName: name } });
    } else if (isFamilyChecked) {
      navigate("/letter-for-workers", { state: { userName: name } });
    } else if (isStudyChecked) {
      navigate("/letter", { state: { userName: name } });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Enter your name <FaRegSadCry color="blue" /> {""}
                <FaHeart color="red" />
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    id="name"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className="ms-2 mt-2">
                    <input
                      type="checkbox"
                      checked={isFamilyChecked}
                      onChange={(e) => setIsFamilyChecked(e.target.checked)}
                    />{" "}
                    <label>Nabuhay ng pamilya</label>
                    <br />
                    <input
                      type="checkbox"
                      checked={isStudyChecked}
                      onChange={(e) => setIsStudyChecked(e.target.checked)}
                    />{" "}
                    <label>Nagaaral nang mabuti</label>
                    {error ? <p className="text-danger">{error}</p>: null} 
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GettingUserName;
