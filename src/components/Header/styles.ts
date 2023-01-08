import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; //centralizar 

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem; //espaçamento entre a borda e o conteudo
        border-radius: 0.25rem; //curva da borda
        height: 3rem;

        transition: filter 0.2s; //prolongar o escurecimento para suavizar a animação
        
        &:hover {
            filter: brightness(0.9); //escurecer 
        }
    }
`;

