import styled from "styled-components";
import nysym from './images/nysymbols.png'
import nyfon from './images/NYImage_compress.png'
import fon from './images/Fon.jpg'

export const MainBlock = styled.div`
    font-family: Comfortaa, serif;
    background-image: url(${nyfon});
    background-attachment: fixed;

    @media (min-width: 2560px) {
        background-image: url(${fon});
        background-size: cover;
    }

    & > :first-child {
        font-size: 30px;
        text-align: center;
    }

    & > div {
        position: relative;
        z-index: 2;
    }

    & > section, & > div > section {
        position: relative;
        z-index: 2;
        text-align: center;
        box-sizing: border-box;
        letter-spacing: .5px;
        font-weight: 100;
        font-size: 20px;
        max-width: 1200px;
        margin: auto;
        padding: 0 20px 60px;

        h1 {
            font-size: 35px;
            margin: 40px 0 40px 0;
        }

        p {
            font-size: 25px;
        }

        @media (min-width: 768px) {
            h1 {
                font-size: 64px;
                margin: 64px 0 64px 0;
            }

            p {
                font-size: 30px;
            }
        }

        @media (min-width: 2560px) {
            h1 {
                font-size: 72px;
            }

            p {
                font-size: 40px;
            }

            h3 {
                font-size: 40px;
            }

            max-width: 1800px;
        }
    }

    & > section {
        color: white;
        padding-top: 60px;
    }

    & > div > section {
        padding-top: 60px;
    }

    .mainText {
        text-align: start;
        line-height: 1.2;

        & > h1 {
            text-align: center;
        }

        p {
            font-size: 16px;
        }

        @media (min-width: 768px) {
            p {
                font-size: 25px;
            }
        }

        @media (min-width: 2560px) {
            p {
                font-size: 40px;
            }
        }
    }

    .withoutOpacity {
        text-align: start;
        position: relative;
        
        .padding {
            padding-left: 50px;

            @media (min-width: 768px) {
                padding-left: 100px;
            }
        }
        
        img {
            display: inline-block;
            position: absolute;
        }
        
        .santa {
            width: 70px;
            bottom: 0;
            left: -20px;

            @media (min-width: 768px) {
                width: 130px;
                bottom: -50px;
                left: -30px;
            }
        }
        
        .alco {
            width: 70px;
            bottom: 0;
            left: -20px;

            @media (min-width: 768px) {
                width: 130px;
                bottom: -20px;
                left: -30px;
            }
        }

        .noalco {
            width: 90px;
            bottom: -10px;
            left: -30px;

            @media (min-width: 768px) {
                width: 150px;
                bottom: -50px;
                left: -40px;
            }
        }

        p {
            position: relative;
            font-size: 16px;
        }

        @media (min-width: 768px) {
            p {
                font-size: 25px;
            }
        }

        @media (min-width: 2560px) {
            p {
                font-size: 40px;
            }
        }
    }
`;

export const TopImage = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 500;
  display: block;
  pointer-events: none;
  background-image: url(${nysym});
  background-repeat: repeat-x;
  background-repeat-y: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const WelcomeBlock = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-bottom: 30px;
  height: 100vh;
  width: 100%;
  left: 0;
  justify-content: center;
  position: relative;

  .arrowDown {
    position: absolute;
    bottom: 40px;
    height: 40px;
    animation: animate 1200ms infinite forwards;

    @media (min-width: 768px) {
      height: 50px;
    }
  }

  h1 {
    font-size: 32px;
    margin-bottom: 48px;
    line-height: 1.2;
  }

  p {
    font-size: 20px;
  }

  & > div {
    z-index: 2;
    max-width: 90vw;
    @media (min-width: 1024px) {
      max-width: 1000px;
    }
    @media (min-width: 2560px) {
      max-width: 1200px;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 32px;
      line-height: 1.2;
    }
  }

  @media (min-width: 2560px) {
    h1 {
      font-size: 72px;
      margin: 80px 0;
    }

    p {
      font-size: 40px;
      margin: 64px 0;
    }
  }

  .mainInfo {
    gap: 16px;
    display: flex;
    flex-direction: column;
    font-size: 20px;

    p {
      margin: 0;
    }

    & > div {
      display: flex;
      gap: 16px;
    }

    @media (min-width: 1024px) {
      margin-left: 70px;
      font-size: 30px;
    }

    @media (min-width: 2560px) {
      font-size: 40px;
      margin-left: 30px;
    }
  }

  @keyframes animate {
    0%, 100% {
      bottom: 40px;
    }
    50% {
      bottom: 60px;
    }
`;

export const Filter = styled.div`
  filter: opacity(0.3);
  height: 100%;
  width: 100%;
  left: 0;
  background-color: black;
  z-index: 1;
  position: fixed;

  @media (min-width: 2560px) {
    filter: opacity(0.7);
  }
`;


export const BottomHero = styled.div`
    position: fixed;
    right: 0;
    bottom: -15px;
    left: ${({second}) => second ? '-40px' : '-30px'};
    width: max-content;
    z-index: 500;
    display: block;
    -webkit-tap-highlight-color: transparent;
    opacity: ${({$opacity}) => $opacity};
    
    img {
        height: 200px;
        cursor: pointer;
        //transform: scale(-1, 1);
    }

    @media (min-width: 768px) {
        right: 2px;
        bottom: -15px;
        left: ${({second}) => second ? '-53px' : '-43px'};
        img {
            height: 250px;
        }
    }
    @media (min-width: 1440px) {
        right: 0;
        bottom: -15px;
        left: ${({second}) => second ? '-60px' : '-50px'};
        img {
            height: 300px;
        }
    }
    @media (min-width: 2560px) {
        img {
            height: 400px;
        }
    }
`;

export const Opacity = styled.div`
  background-color: rgb(255, 255, 255, 0.7);
    
    .platypus {
        width: 100%;
        max-width: max-content;
    }
`;

export const YMap = styled.div`
  position: relative;
  overflow: hidden;

  & > iframe {
    position: relative;
    width: 60vw;
    height: 20vh;
    @media (min-width: 768px) {
      width: 960px;
      height: 400px;
    }

    @media (min-width: 2560px) {
      width: 1500px;
      height: 700px;
    }
  }
`;

export const Title = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  font-weight: 700;

  @media (min-width: 1024px) {
    width: 130px;
  }

  @media (min-width: 2560px) {
    width: 180px;
  }
`;

export const Text = styled.div`

`;
