import { FaCheck } from "react-icons/fa";
import StyledCheckbox from "./styled";

export default function Checkbox(props) {

    const { id, label } = props;

    return (
        <StyledCheckbox>
            <div className="checkbox">
                <input id={id} type="checkbox" />
                <label htmlFor={id}>
                    <span className="box">
                        <FaCheck />
                    </span>
                </label>
            </div>
        </StyledCheckbox>
    );
};