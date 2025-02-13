import { useLocation } from "react-router-dom"
import { IoMdFlower } from "react-icons/io"
import "./flowers.css"

const Flowers = () => {
  const location = useLocation()
  const { userName } = location.state || { userName: "" }

  return (
    <div className="flowers-container">
      <div className="flowers-card">
        <h1 className="flowers-title">
          Hi, {userName || "there"}! Here's a flower just for you!!! <IoMdFlower className="flower-icon" />
        </h1>
        <div className="image-container">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGtvdmpvd2RxbzZtMWdkbmEzanVkZ3dqYnp4NjE2OTRsbjk3aGFpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/j9PwcQKxbFMt9NNjEL/giphy.gif"
            alt="Animated flower"
            className="flower-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </div>
  )
}

export default Flowers

