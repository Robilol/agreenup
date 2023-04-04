import React, {FC, Fragment, PropsWithChildren, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ArrowSmallUpIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const CgvModal: FC<ModalProps> = ({isOpen, onClose}) => {
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
                  <span className="font-sporting-grotesque font-bold text-[18px]">Conditions générales de vente</span>
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
                    className="text-primary-50 text-[38px] leading-[44px] font-sporting-grotesque">Conditions générales de vente</span>

                  <div className="text-primary-50 font-light space-y-5 mt-5 mb-10">
                    <span className="text-xl block font-bold">Objet</span>
                    <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre
                      AgreenUp, représenté par [nom du représentant légal de l&apos;entreprise], immatriculée au
                      Registre du
                      Commerce et des Sociétés de [ville d&apos;immatriculation] sous le numéro [numéro
                      d&apos;immatriculation] et
                      tout client souhaitant utiliser les services de réservation de visioconférence via Calendly
                      proposés par AgreenUp.</p>

                    <span className="text-xl block font-bold">Description des services</span>
                    <p>AgreenUp propose un service de réservation de visioconférence via Calendly pour une durée de 2h30
                      pour un tarif de 20 euros.</p>

                    <span className="text-xl block font-bold">Modalités de réservation</span>
                    <p>Les réservations de créneaux horaires de visioconférence se font uniquement via Calendly. Les
                      clients sont tenus de renseigner toutes les informations demandées lors de la réservation,
                      notamment leur nom, prénom, adresse e-mail et numéro de téléphone.</p>

                    <span className="text-xl block font-bold">Paiement</span>
                    <p>Le paiement des prestations s&apos;effectue exclusivement en ligne sur la plateforme de paiement
                      sécurisée proposée par Calendly. Les paiements sont encaissés immédiatement lors de la
                      réservation.</p>

                    <span className="text-xl block font-bold">Annulation et remboursement</span>
                    <p>Les clients peuvent annuler leur réservation jusqu&apos;à 24 heures avant la date et l&apos;heure
                      de la
                      visioconférence. Toutefois, aucun remboursement ne sera effectué en cas d&apos;annulation tardive
                      ou
                      d&apos;absence du client au moment de la visioconférence.</p>

                    <span className="text-xl block font-bold">Responsabilité</span>
                    <p>AgreenUp ne pourra être tenue responsable des interruptions de service ou des dysfonctionnements
                      techniques qui pourraient survenir lors de la visioconférence. En outre, AgreenUp ne pourra être
                      tenue responsable des contenus échangés pendant la visioconférence.</p>

                    <span className="text-xl block font-bold">Propriété intellectuelle</span>
                    <p>Le client s&apos;engage à ne pas utiliser les contenus partagés lors de la visioconférence à des
                      fins
                      autres que celles prévues par la prestation.</p>

                    <span className="text-xl block font-bold">Confidentialité</span>
                    <p>AgreenUp s&apos;engage à respecter la confidentialité des informations échangées lors de la
                      visioconférence. Les données personnelles des clients sont également traitées conformément aux
                      dispositions de la loi Informatique et Libertés du 6 janvier 1978 modifiée.</p>

                    <span className="text-xl block font-bold">Modification des CGV</span>
                    <p>AgreenUp se réserve le droit de modifier à tout moment les présentes conditions générales de
                      vente. Les nouvelles conditions générales de vente seront applicables à toute réservation
                      effectuée après leur publication sur le site AgreenUp.</p>

                    <span className="text-xl block font-bold">Loi applicable et juridiction compétente</span>
                    <p>Les présentes conditions générales de vente sont soumises à la loi française. Tout litige relatif
                      à leur interprétation ou à leur exécution sera de la compétence exclusive des tribunaux
                      français.</p>


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

export default CgvModal
