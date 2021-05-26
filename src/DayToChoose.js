import { Link } from "react-router-dom";

const DayToChoose = () => {
  return (
    <div className="containerOfDayToChoose">
      <Link to="/metrics">
        <button className="card">
          <h2>Pierwszy dzień badania</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium iste nemo error reiciendis beatae numquam aut fugit
            distinctio, reprehenderit hic eius doloribus aspernatur! Possimus
            nisi reiciendis dolorum sed architecto! Ipsum.
          </p>
        </button>
      </Link>
      <Link to="introsd">
        <button className="card">
          <h2>Drugi dzień badania</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium iste nemo error reiciendis beatae numquam aut fugit
            distinctio, reprehenderit hic eius doloribus aspernatur! Possimus
            nisi reiciendis dolorum sed architecto! Ipsum.
          </p>
        </button>
      </Link>
    </div>
  );
};

export default DayToChoose;
