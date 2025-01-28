import React, { useEffect } from 'react'

export interface ModalProps {
    usedFor: string
    opened?: boolean
    onClose?: () => void | Promise<void>
    onOk?: () => void | Promise<void>
    type?: 'btn'
    className?: string
    customWidth?: string
    modalButton: string | React.ReactNode
    hideXButton?: boolean
    hideCloseButton?: boolean
    okButtonText?: string
    children: React.ReactNode
}

export function Modal({
    onClose,
    onOk,
    children,
    type,
    className = '',
    customWidth,
    hideCloseButton = false,
    hideXButton = false,
    modalButton,
    usedFor,
    okButtonText = 'Ok',
    opened = false,
}: ModalProps) {
    useEffect(() => {
        return () => {
            document.getElementById(`modal_${usedFor}`)?.close()
        }
    }, [])
    return (
        <>
            <span
                hidden={opened}
                className={`cursor-pointer ${type}`}
                onClick={() =>
                    document.getElementById(`modal_${usedFor}`)?.showModal()
                }
            >
                {modalButton}
            </span>
            <dialog
                id={`modal_${usedFor}`}
                className={`modal ${className}`}
                onClose={onClose}
            >
                <div className={`modal-box ${customWidth}`}>
                    {children}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                className={`btn ${hideCloseButton ? 'hidden' : ''}`}
                                onClick={onClose}
                            >
                                Close
                            </button>
                            <button
                                onClick={onOk}
                                className={`btn ${!onOk ? 'hidden' : ''}`}
                            >
                                {okButtonText}
                            </button>
                            <button
                                className={`btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ${hideXButton ? 'hidden' : ''}`}
                            >
                                ✕
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
