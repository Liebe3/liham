import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const VirtualHug = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
          Hi, Yan Yan
          <FaHeart
            className="inline-block ml-2 text-red-500"
            size={40}
          />
        </h1>
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGllN29ob3ZmMmlueXB0MHBxa3RqbGloYm5xZTVkMDZ5emVkZTFyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9d3LQ6TdV2Flo8ODTU/giphy.gif"
          alt="Virtual Hug"
          className="w-full h-auto rounded-lg shadow-md mb-6"
        />
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default VirtualHug;
