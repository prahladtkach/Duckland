import styled from "styled-components";
import { Navbar } from "./components/Navbar";
import { FormularioRegistro } from "./components/FormularioRegistro";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log(clerkPubKey)
export const App = () => {
    return (
                <Container>
                    <Navbar />
                    <FormularioRegistro />
                </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;