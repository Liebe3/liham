import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LetterForWorkingStudents = () => {
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
                  I know it’s hard to study and work at the same time, but it
                  will be worth it. The sacrifices you make now are paving the
                  way for a brighter, more fulfilling future. Your resilience
                  and determination are truly inspiring, and every small step
                  forward is a sign of your strength.
                </p>
                <p>
                  Even when the days are tough, your hard work isn’t going
                  unnoticed. You’re creating a future full of possibilities,
                  with opportunities waiting for you ahead.
                </p>
                <p>
                  Even on tough days, your hard work doesn’t go unnoticed.
                  You’re building a future full of possibilities, with unseen
                  opportunities ahead. Be kind to yourself you deserve it. Trust
                  your efforts are leading to something great, and remember how
                  valued you are.
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

export default LetterForWorkingStudents;
