import styled from "styled-components";

export const AppWrapper = styled.div`

    height: 100%;
    display: grid;
    column-gap: 10px;
    row-gap: 45px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto;

`;

export const Title = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    display: block;
    margin-bottom: 20px;
`;

export const SongListWrapper = styled.div`
    height: 75%;
    grid-column: 1 / 3;
    overflow-y: scroll;

    p {
        cursor: pointer;
    }
    
    p:hover{
        color: aliceblue;
        background: darkorchid;
    }

`;

export const YouTubePlayerWrapper = styled.div`
    grid-column: 3 / -1;

`;

