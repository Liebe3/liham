import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const location = useLocation();
  const { userName } = location.state || { userName: "" };
  const navigate = useNavigate();

  const hanldeContinue = (e) => {
    e.preventDefault();
    // Navigate to the Letter component and pass the name via state
    navigate("/flowers", { state: { userName } });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="text-center mb-4">
                Happy Valentine's Day, {userName}! 💌
              </h1>
              <div className="letter-content">
                <p>
                  Today isn't just about romance it's a celebration of love in
                  all its forms, including the love for learning and the dreams
                  you're working so hard to achieve.
                </p>
                <p>
                  Your dedication in your eyes, the hours you put in, and the
                  moments you’ve fought through doubt. Every little step you
                  take, even when it’s hard, is a sign of your courage and
                  strength. Let me tell you this, there’s a seat waiting for you
                  at tables you haven’t seen yet.
                </p>
                <p>
                  You are stronger than you realize, and your future is filled
                  with endless possibilities. Be kind to yourself. You deserve
                  all the love and patience you give to others.
                </p>
                <p>
                  Trust that every little step is leading you to something
                  amazing. Keep going. Believe in yourself. You've already made
                  it so far, and I know you'll go even further.
                </p>
                <p className="fw-bold">So proud of you MF!</p>
                <button className="btn btn-success" onClick={hanldeContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
