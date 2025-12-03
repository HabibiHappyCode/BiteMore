import { createContext, useState } from "react";

const ModalContext = createContext({
    modalProgress: '',
    showOrderNowModal: () => { },
    closeOrderNowModal: () => { }
})

export function ModalContextProvider({ children }) {
    const [showModal, setShowModal] = useState('');

    const showOrderNowModal = () => {
        setShowModal('show')
    };

    const closeOrderNowModal = () => {
        setShowModal('')
    }

    const ctxModal = {
        modalProgress: showModal,
        showOrderNowModal,
        closeOrderNowModal
    }

    
    return <ModalContext.Provider value={ctxModal}>
        {children}
    </ModalContext.Provider>
}

export default ModalContext