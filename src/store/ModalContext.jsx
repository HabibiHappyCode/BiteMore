import { createContext, useState } from "react";

const ModalContext = createContext({
    modalProgress: '',
    showOrderNowModal: () => { },
    closeOrderNowModal: () => { },
    showEditModal: () => { },
    closeEditModat: () => { },
    showBlogModal: () => { },
    closeBlogModal: () => { }
})

export function ModalContextProvider({ children }) {
    const [showModal, setShowModal] = useState('');

    const showOrderNowModal = () => {
        setShowModal('show')
    };

    const closeOrderNowModal = () => {
        setShowModal('')
    }

    const showEditModal = () => {
        setShowModal('showEdit')
    }

    const closeEditModal = () => {
        setShowModal('')
    }

    const showBlogModal = () => {
        setShowModal('showBlog')
    }

    const closeBlogModal = () => {
        setShowModal('')
    }
    const ctxModal = {
        modalProgress: showModal,
        showOrderNowModal,
        closeOrderNowModal,
        showEditModal,
        closeEditModal,
        showBlogModal,
        closeBlogModal
    }


    return <ModalContext.Provider value={ctxModal}>
        {children}
    </ModalContext.Provider>
}

export default ModalContext