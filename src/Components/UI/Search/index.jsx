import StyledSearch from "./styled";
import { useQueryStore } from "../../../Hooks/queryStore";

export default function Search ({ data }) {
    const { query, setQuery } = useQueryStore();

    function handleChange(event) {
        const userInput = event.target.value.toLocaleLowerCase();
        const keys = ["name", "description", "id"];

        //3 charachters needed for search filter to work
        if (userInput.length === 0 || userInput.length >2) {
            const searchResults = data.filter((item) =>
            keys.some((key) => item[key]?.toLowerCase().includes(userInput))
            );
            setQuery(searchResults);
        }
    }

    return (
        <StyledSearch>
            <input
            type="text"
            onChange={handleChange}
            onClick={(e) => e.target.scrollIntoView({ behaviour: "smooth" })}
            placeholder="Search Venues"
            className="search-input"
            />
        </StyledSearch>
    );
};