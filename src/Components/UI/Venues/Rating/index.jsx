import { FaStar } from "react-icons/fa";

export default function Rating( { rating }) {
    return (
        <p>
            <FaStar className="star" aria-label="Rating" /> {rating.toFixed(1)}
        </p>
    );
};