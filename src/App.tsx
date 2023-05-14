import styled from "styled-components";
import {Navbar} from "./components/Navbar";

export const App = () => {
    return (
        <Container>
          <Navbar />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;