import { styled } from "styled-components"

export const FormularioRegistro = ()=> {
    return (
        <Container>
            <Form>
                <input 
                type="text"
                placeholder="cuak is your userduck?"
                />
                <input 
                    type="email"
                    placeholder="cuak is your mail?"
                />
                <input 
                    type="password"
                    placeholder="ducksword"               
                />
                <button>Duck up</button>
            </Form>
        </Container>
    )
}
const Container = styled.div`
    background-color: #fafeb0;
    display:flex;
    flex-direction: column; 
    height: 100%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 17rem;
    align-self: center;
    margin-top: 10em;
`; 