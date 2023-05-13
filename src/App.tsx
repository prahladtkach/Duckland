import styled from "styled-components";

export const App = ()=> {
    return (
        <Container>
                    <h1>
                        Patolandia 
                    </h1>
        </Container>
    )
}

const Container = styled.div `
    background: url("./src/assets/patitoconflorcita.jpg");
    width: 50rem;
    height: 50rem;
    h1 {
        color: white;
    }
`;