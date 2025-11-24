import React from "react";
import {createPortal} from "react-dom";
import { CircleBig, CircleSmall, Modal, ModalContent} from "./styles";


export const ModalWindow = ({
                                isOpen,
                                closeModal,
                                children,
                                zIndex = 499,
                                $opacity
                            }) => createPortal(
    <Modal
        isOpen={isOpen}
        onClick={() => closeModal(false)}
        zIndex={zIndex}
        $opacity={$opacity}
    >
        <ModalContent
            isOpen={isOpen}
            onClick={(e) => e.stopPropagation()}
        >
            <CircleBig/>
            <CircleSmall/>
            {children}
        </ModalContent>
    </Modal>,
    document.body,
);
