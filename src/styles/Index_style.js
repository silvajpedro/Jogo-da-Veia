import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-weight: 900;
}

html ::-webkit-scrollbar {
 display: none;
}
`

export const MainBox = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 102vh;
  background-color: #48cae4;
  background-image: url(${(props) => props.$win ? "https://i.gifer.com/origin/1a/1af8d3b487b77085d5288814f151e1de.gif":""});
  background-size: 12%;

`;
export const MainFirstBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 42%;
`;

export const WinAlert = styled.p`
position: absolute;
top:1vh;
background-color:#7B68EE;
width: 38vw;
text-align: center;
padding: 20px;
border-radius: 50px;
border: 8px solid;
font-size: 2vw;
`

export const PlayerTitle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14vw;
  height: 6vh;
  border: solid;
  border-radius: 30px;
  background-color: #ff6c36;
  padding-bottom: 5px;
  font-size: 1.5vw;
  letter-spacing: 2.5px;
`;
export const PlayerSimbol = styled.span`
  font-size: 1.8vw;
  margin-left: 5px;
  &[value="O"] {
    color: ${(props) => props.$iscoloro || "#fee440"};
  }
  &[value="X"] {
    color: ${(props) => props.$iscolorx || "#8338ec"};
  }
`;

export const ChangeColor = styled(PlayerTitle)`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const GameBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: solid 5px; */
  height: 80vh;
  width: 60vw;
`;
export const LineSquare = styled.div`
  display: flex;
  width: 100%;
  /* border:solid red; */
  height: 24.5vh;
`;

export const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24.5vh;
  width: 20vw;
  border-top: ${(props) => props.$isbordertop || "none"};
  border-right: ${(props) => props.$isborderright || "none"};
  border-bottom: ${(props) => props.$isborderbottom || "none"};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16vh;
  width: 16vw;
  font-size: 5.38vw;
  background-color: transparent;
  border: none;
  &[value="O"] {
    color: ${(props) => props.$iscoloro || "#fee440"};
  }
  &[value="X"] {
    color: ${(props) => props.$iscolorx || "#8338ec"};
  }
`;
export const ButtonReload = styled(ChangeColor)`
  position: relative;
  bottom: 2vh;
  font-size: 1.07vw;
  padding-top: 2px;
  width: 18%;
  height: 6.2vh;
  background-color: #7B68EE;
`;
