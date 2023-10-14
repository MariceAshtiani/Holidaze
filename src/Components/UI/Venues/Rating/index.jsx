import { FaStar } from "react-icons/fa";

export default function Rating( { rating, hasRatings }) {
    const starColor = hasRatings ? "orange" : "gray";
    return (
        <p>
            <FaStar className="star" aria-label="Rating" style={{ color: starColor}} /> {rating.toFixed(1)}
        </p>
    );
};