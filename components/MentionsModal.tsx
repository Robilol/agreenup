import React, {FC, Fragment, PropsWithChildren, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ArrowSmallUpIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const MentionsModal: FC<ModalProps> = ({isOpen, onClose}) => {
  const scrollContent = useRef<HTMLDivElement | null>(null)

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

        <div className="fixed inset-0 overflow-y-auto" ref={scrollContent}>
          <div className="flex min-h-full items-center justify-center p-[50px]">
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
                className="w-full max-w-3xl transform overflow-hidden bg-primary-900 rounded-[50px] rounded-tl-[0px] transition-all">
                <Dialog.Title
                  as="div"
                  className="flex flex-row items-center justify-between text-primary-50 p-[50px] border-b-2 border-primary-800"
                >
                  <span className="font-sporting-grotesque font-bold text-[18px]">Mentions légales</span>
                  <button className="flex items-center gap-2.5" onClick={onClose}>
                    <span className="font-bold text-[18px]">Fermer</span>
                    <div
                      className="bg-primary-800 rounded-[48px] rounded-bl-[0px] flex items-center justify-center w-[32px] h-[32px]">
                      <XMarkIcon className="w-5 h-5"/>
                    </div>
                  </button>
                </Dialog.Title>
                <div className="p-[50px] relative">
                  <span
                    className="text-primary-50 text-[38px] leading-[44px] font-sporting-grotesque">Mentions légales</span>
                  <div className="text-primary-50 font-light space-y-5 mt-5 mb-10">
                    <p>Le site agreenup.fr est édité par [nom de la société éditrice], société par actions simplifiée au
                      capital de [montant du capital social] euros, immatriculée au Registre du Commerce et des Sociétés
                      de [ville d&apos;immatriculation] sous le numéro [numéro d&apos;immatriculation]. Son siège social
                      est situé à
                      [adresse du siège social].</p>

                    <p>Directeur de la publication : [nom du directeur de la publication]</p>

                    <p>Adresse e-mail : [adresse e-mail de contact]</p>

                    <p>Hébergement : [nom de l&apos;hébergeur], [adresse de l&apos;hébergeur], [numéro de téléphone de
                      l&apos;hébergeur],
                      [adresse e-mail de l&apos;hébergeur]</p>

                    <span className="text-xl block font-bold">CONDITIONS D&apos;UTILISATION</span>

                    <p>L&apos;utilisation du site agreenup.fr implique l&apos;acceptation pleine et entière des
                      conditions
                      générales
                      d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont susceptibles
                      d&apos;être modifiées ou
                      complétées à tout moment, les utilisateurs du site agreenup.fr sont donc invités à les consulter
                      régulièrement.</p>

                    <span className="text-xl block font-bold">PROPRIÉTÉ INTELLECTUELLE</span>

                    <p>Tous les éléments du site agreenup.fr, qu&apos;ils soient visuels ou sonores, y compris la
                      technologie
                      sous-jacente, sont protégés par le droit d&apos;auteur, des marques ou des brevets. Ils sont la
                      propriété
                      exclusive de [nom de la société éditrice] ou de ses partenaires. Toute reproduction,
                      représentation,
                      utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans
                      l&apos;accord préalable et écrit de [nom de la société éditrice] est strictement interdite.</p>

                    <span className="text-xl block font-bold">DONNÉES PERSONNELLES</span>

                    <p>Les données personnelles collectées sur le site agreenup.fr sont traitées conformément à la
                      réglementation en vigueur. Pour en savoir plus sur notre politique de confidentialité et de
                      protection des données personnelles, veuillez consulter notre politique de confidentialité
                      accessible depuis la page d&apos;accueil du site.</p>

                    <span className="text-xl block font-bold">COOKIES</span>

                    <p>Le site agreenup.fr peut utiliser des cookies pour faciliter la navigation et améliorer
                      l&apos;expérience utilisateur. Pour en savoir plus sur notre utilisation des cookies, veuillez
                      consulter
                      notre politique de cookies accessible depuis la page d&apos;accueil du site.</p>

                    <span className="text-xl block font-bold">DROIT APPLICABLE ET JURIDICTION</span>

                    <p>Tout litige en relation avec l&apos;utilisation du site agreenup.fr est soumis au droit français.
                      Il est
                      fait attribution exclusive de juridiction aux tribunaux compétents de [ville du siège social de la
                      société éditrice].</p>
                  </div>

                  <button onClick={() => scrollContent.current?.scrollTo({top: 0, behavior: 'smooth'})}
                          className="absolute right-[50px] bottom-[50px] z-[1] bg-primary-50 w-[50px] h-[50px] flex justify-center items-center rounded-[48px] rounded-tl-[0px] shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
                    <ArrowSmallUpIcon className="w-10 h-10 text-primary-700"/>
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

export default MentionsModal
