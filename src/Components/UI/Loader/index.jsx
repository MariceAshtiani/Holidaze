import { LoaderContainer } from "./styled";

export default function Loader({ loadingState }) {
    return <LoaderContainer $isLoading={loadingState} />;
}