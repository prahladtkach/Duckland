import styled from "styled-components";

export const Navbar = () => {
    return (
        <Container>
            <div style={{marginLeft:"1em"}}>
                Ducks
            </div>
            <div>
                Pixel ducks
            </div>
            <div>
                More ducks
            </div>
            <div style={{marginRight:"1em"}}>
                Contact ducks
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #efc60e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
`;
