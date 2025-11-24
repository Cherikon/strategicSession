import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    top: 380px;
    bottom: 0;
    left: 90px;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease;
    display: ${({isOpen}) => (isOpen ? 'flex' : 'none')};
    z-index: ${({zIndex}) => zIndex};
    -webkit-tap-highlight-color: transparent;
    opacity: ${({$opacity}) => $opacity};

    @media (min-width: 480px) {
        align-items: center;
    }

    @media (min-width: 768px) {
        top: 100px;
        left: 20px;
    }
    @media (min-width: 2560px) {
        top: 850px;
        left: 300px;
    }
`;

export const ModalContent = styled.div`
    font-family: Comfortaa, serif;
    position: relative;
    line-height: 1.2;
    padding: 24px;
    margin: 5px;
    border-radius: 50%;
    background-color: white;
    transition: all 0.25s ease;
    transform: ${({isOpen}) => (isOpen ? 'scale(1)' : 'scale(0.5)')};
    font-size: 12px;

    @media (min-width: 375px) {
        font-size: 14px;
        padding: 30px;
    }
    @media (min-width: 768px) {
        width: 200px;
        font-size: 16px;
        padding: 40px;
    }
    @media (min-width: 2560px) {
        width: 500px;
        font-size: 30px;
        padding: 64px;
    }
`;

export const CircleBig = styled.div`
    position: absolute;
    left: 60px;
    bottom: -15px;
    height: 30px;
    width: 30px;
    background: inherit;
    border-radius: 50%;
`;
export const CircleSmall = styled.div`
    position: absolute;
    left: 60px;
    bottom: -25px;
    height: 15px;
    width: 15px;
    background: inherit;
    border-radius: 50%;
`;
