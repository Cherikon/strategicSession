import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  
  img {
    border-radius: 5%;
    pointer-events: none;
  }
  .slick-track {
    display: flex;
    gap: 32px;
  }
  .slick-prev {
    left: -52px !important;
  }
  .slick-arrow {
    display: none !important;
    @media (min-width: 1366px) {
      display: block !important;
    }
  }
  .slick-next:before,
  .slick-prev:before {
    content: "" !important;
  }
  .next-slick-arrow,
  .prev-slick-arrow {
    display: none !important;
    color: #000000;

    @media (min-width: 1366px) {
      color: white;
      display: block !important;
      font-size: 30px;
    }
  }
   
  .next-slick-arrow {
    @media (min-width: 1366px) {
      padding-left: 15px;
    }
  }
  .slick-dots li.slick-active button:before {
    color: darkgreen;
  }
  .slick-dots li button:before {
    color: white;
  }
`;

const CommonImgHeight = styled.div`
  img {
    height: 300px;
  }
  @media (min-width: 768px) {
    img {
      height: 400px;
    }
  }

  @media (min-width: 2560px) {
    img {
      height: 600px;
    }
  }
`;

export const ThreeFourImg = styled(CommonImgHeight)`
  img {
    width: 200px;
  }
  @media (min-width: 768px) {
    img {
      width: 300px;
    }
  }
  
  @media (min-width: 2560px) {
    img {
      width: 400px;
    }
  }
`

export const TwoFourImg = styled(CommonImgHeight)`
  img {
    width: 150px;
  }
  @media (min-width: 768px) {
    img {
      width: 250px;
    }
  }

  @media (min-width: 2560px) {
    img {
      width: 350px;
    }
  }
`;

export const FiveFourImg = styled(CommonImgHeight)`
  img {
    width: 400px;
  }
  @media (min-width: 768px) {
    img {
      width: 500px;
    }
  }

  @media (min-width: 2560px) {
    img {
      width: 700px;
    }
  }
`;