import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({ children, open }) {
    const dialog = useRef()


    useEffect(() => {
        const modal = dialog.current

        if (open) {
            modal.showModal()
        }
        return () => modal.close()
    }, [open])

    return createPortal(
        <dialog ref={dialog} className={`${open ? 'flex': ''} justify-self-center rounded-xl self-center w-[50%] max-md:w-full relative `}>
            {children}
        </dialog>,
        document.getElementById('modal')
    )
}

export default Modal
