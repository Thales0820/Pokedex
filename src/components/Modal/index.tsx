import { ReactNode } from "react"
import { Close, ModalBase, Overplay } from "./styles"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return(
    <>
      <Overplay onClick={onClose}>
        <ModalBase>
          <Close onClick={onClose}>
            X
          </Close>
          {children}
        </ModalBase>
      </Overplay>
    </>
  )
}

export default Modal
