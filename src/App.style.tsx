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
    grid-column: 1 / 3;
    padding: 10px 20px;
    input{
        margin-bottom: 10px;
        width: 100%;
    }
    
    Autocomplete{
        max-width: 250px;
    }
    
    .songTitle{
        font-size: 20px;
        padding: 10px 5px;
        cursor: pointer;
    }

`;

export const YouTubePlayerWrapper = styled.div`
    grid-column: 3 / 10;
    padding: 10px 50px;

`;

export const QoutesWrapper = styled.div`

        margin-top:10px; 
        overflow-y: scroll; 

        span{
            font-size: 20px;
        }

        .qoute{
            cursor: pointer;
            margin: 0px;
            padding: 10px 5px;

            :hover{
                background: aquamarine;
            }
        }
    

`;