import React, {FC, Fragment, PropsWithChildren} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/20/solid";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({isOpen, onClose, children}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-[40px]"/>
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-[50px] text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full transform overflow-hidden bg-primary-900 rounded-[50px] rounded-tl-[0px] transition-all">
                <Dialog.Title
                  as="div"
                  className="flex flex-row items-center justify-between text-primary-50 p-[50px] border-b-2 border-primary-800"
                >
                  <span className="font-sporting-grotesque font-bold text-[18px]">Mon parcours</span>
                  <button className="flex items-center gap-2.5" onClick={onClose}>
                    <span className="font-bold text-[18px]">Fermer</span>
                    <div className="bg-primary-800 rounded-[48px] rounded-bl-[0px] flex items-center justify-center w-[32px] h-[32px]">
                      <XMarkIcon className="w-5 h-5" />
                    </div>
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    you an email with all of the details of your order.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
