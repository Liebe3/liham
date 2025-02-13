import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LetterForWorkers = () => {
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
                  Your dedication and resilience are inspiring. You rise to
                  challenges with strength, building a brighter future for
                  yourself and others. Hard work pays off, leading to new
                  opportunities and achievements.
                </p>
                <p>
                  No matter how tough your environment gets, stay true to
                  yourself and keep moving forward—you’re stronger than any
                  challenge. Be kind to yourself because you deserve it. Believe
                  in your potential and the opportunities ahead.
                </p>
                <p>
                  Keep going with confidence you are unstoppable. And on this
                  Valentine’s Day, know how appreciated you are.
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

export default LetterForWorkers;
