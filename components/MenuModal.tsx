import React, {FC, Fragment, PropsWithChildren, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ArrowSmallUpIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onLinkClick: (anchor: string) => void
}

const MenuModal: FC<ModalProps> = ({isOpen, onClose, onLinkClick}) => {
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
          <div className="flex p-5">
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
                className="w-full max-w-3xl transform overflow-hidden bg-primary-900 rounded-[25px] rounded-tr-[0px] transition-all">
                <Dialog.Title
                  as="div"
                  className="flex flex-row items-center justify-between text-primary-50 p-5 md:p-[50px]"
                >
                  <span className="font-sporting-grotesque font-bold text-[14px] md:text-[18px]">Agreenup</span>
                  <button className="flex items-center gap-2.5" onClick={onClose}>
                    <span className="font-bold text-[14px] md:text-[18px] underline">Fermer</span>
                  </button>
                </Dialog.Title>
                <div className="flex items-start flex-col gap-[10px] font-sporting-grotesque font-bold text-primary-50 text-[18px] leading-[38px] p-5">
                  <button onClick={() => {
                    onLinkClick('#permaculture')
                  }}>La permaculture
                  </button>
                  <button onClick={() => {
                    onLinkClick('#about')
                  }}>À propos
                  </button>
                  <button onClick={() => {
                    onLinkClick('#formations')
                  }}>Les formations
                  </button>
                  <button className="px-5 py-1.5 text-primary-600 bg-primary-50 rounded-[40px] font-hk-grotesk w-full font-bold">Réserver une formation
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MenuModal
