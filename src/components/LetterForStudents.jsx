import { useNavigate } from "react-router-dom";

const Letter = () => {
  const navigate = useNavigate();

  const hanldeContinue = (e) => {
    e.preventDefault();
    // Navigate to the Letter component and pass the name via state
    navigate("/flowers");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">"
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <h1 className="text-center mb-4">
                Happy Valentine's Day, Yan Yan! 💌
              </h1>
              <div className="letter-content">
                <p>
                  Hi, Yan Yan! I hope your day is filled with love, laughter,
                  and happiness. You’ve always been such an inspiring person,
                  and I know you’ve got an exciting challenge ahead with your
                  upcoming demo.
                </p>
                <p>
                  Good luck with it! I believe in your talent, dedication, and
                  hard work, and I’m sure you’ll shine just like you always do.
                  You’ve got this! There’s a seat waiting for you at tables you
                  haven’t even seen yet.
                </p>
                <p>
                  Wishing you all the best today and every day. Keep being
                  amazing, and don’t forget to take a little time to celebrate
                  yourself too!
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
