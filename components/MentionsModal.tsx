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

                <div className="fixed inset-0">
                    <div className="flex items-center justify-center p-5 sm:p-[50px]">
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
                                className="w-full max-w-[1340px] sm:max-h-[92vh] transform overflow-hidden bg-primary-900 rounded-[50px] rounded-tl-[0px] transition-all font-hk-grotesk">
                                <Dialog.Title
                                    as="div"
                                    className="flex flex-row items-center justify-between text-primary-50 p-5 sm:p-[50px] border-b-2 border-primary-800"
                                >
                                    <span
                                        className="font-sporting-grotesque font-bold text-[18px]">Mentions légales</span>
                                    <button className="flex items-center gap-2.5" onClick={onClose}>
                                        <span className="font-bold text-[18px]">Fermer</span>
                                        <div
                                            className="bg-primary-800 rounded-[48px] rounded-bl-[0px] flex items-center justify-center w-[32px] h-[32px]">
                                            <XMarkIcon className="w-5 h-5"/>
                                        </div>
                                    </button>
                                </Dialog.Title>
                                <div
                                    className="p-5 pb-10 sm:p-[50px] relative overflow-y-auto max-h-[80vh] sm:max-h-[83vh]"
                                    ref={scrollContent}>
                  <span
                      className="text-primary-50 text-[38px] leading-[44px] font-sporting-grotesque">Mentions légales</span>
                                    <div className="text-primary-50 font-light space-y-5 mt-5 mb-10 text-[18px]">
                                        <p>Le site agreenup.fr est édité par : <br/>
                                            M Laurent Jarosz <br/>
                                            Entrepreneur individuel <br/>
                                            Siren: 951291111<br/> <br/>
                                            Son siège social
                                            est situé au :
                                            <br/>
                                            15 rue de la maladière<br/>
                                            Entrée D <br/>
                                            89000, Auxerre</p>

                                        <p>Directeur de la publication : M Laurent Jarosz</p>

                                        <p>Adresse e-mail : laurent.jarosz89@gmail.com</p>

                                        <p>Hébergement : <br/>
                                            Nom: Vercel v Inc<br/>
                                            Adresse: 340 S Lemon Ave – 4133 Walnut, CA 91789<br/>
                                            Téléphone: 5592887060,<br/>
                                            Email: dmca@vercel.com</p>

                                        <span
                                            className="block font-sporting-grotesque font-bold">Conditions d&apos;utilisation</span>

                                        <p>L&apos;utilisation du site agreenup.fr implique l&apos;acceptation pleine et
                                            entière des
                                            conditions
                                            générales
                                            d&apos;utilisation ci-après décrites. Ces conditions d&apos;utilisation sont
                                            susceptibles
                                            d&apos;être modifiées ou
                                            complétées à tout moment, les utilisateurs du site agreenup.fr sont donc
                                            invités à les consulter
                                            régulièrement.</p>

                                        <span className="font-sporting-grotesque block font-bold">Propriété intellectuelle</span>

                                        <p>Tous les éléments du site agreenup.fr, qu&apos;ils soient visuels ou sonores,
                                            y compris la
                                            technologie
                                            sous-jacente, sont protégés par le droit d&apos;auteur, des marques ou des
                                            brevets. Ils sont la
                                            propriété
                                            exclusive de [nom de la société éditrice] ou de ses partenaires. Toute
                                            reproduction,
                                            représentation,
                                            utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie
                                            de ces éléments, sans
                                            l&apos;accord préalable et écrit de [nom de la société éditrice] est
                                            strictement interdite.</p>

                                        <span
                                            className="font-sporting-grotesque block font-bold">Données personnelles</span>

                                        <p>Les données personnelles collectées sur le site agreenup.fr sont traitées
                                            conformément à la
                                            réglementation en vigueur. Pour en savoir plus sur notre politique de
                                            confidentialité et de
                                            protection des données personnelles, veuillez consulter notre politique de
                                            confidentialité
                                            accessible depuis la page d&apos;accueil du site.</p>

                                        <span className="font-sporting-grotesque block font-bold">Cookies</span>

                                        <p>Calendly est un prestataire de services tiers qui fournit un service de
                                            planification de rendez-vous en ligne. Lorsque vous utilisez notre service
                                            de planification de rendez-vous, Calendly peut placer des cookies sur votre
                                            appareil afin de collecter des informations sur votre utilisation de leur
                                            service, y compris votre adresse IP, votre navigateur et votre système
                                            d&apos;exploitation. Ces cookies sont utilisés pour améliorer
                                            l&apos;expérience
                                            utilisateur et pour permettre à Calendly de fournir des services
                                            personnalisés en fonction de vos préférences. En utilisant notre service de
                                            planification de rendez-vous, vous acceptez que Calendly puisse placer des
                                            cookies sur votre appareil. Pour plus d&apos;informations sur
                                            l&apos;utilisation des
                                            cookies par Calendly, veuillez consulter leur politique de confidentialité
                                            sur leur site web.</p>

                                        <span className="font-sporting-grotesque block font-bold">Droit applicable et juridiction</span>

                                        <p>Tout litige en relation avec l&apos;utilisation du site agreenup.fr est
                                            soumis au droit français.
                                            Il est
                                            fait attribution exclusive de juridiction aux tribunaux compétents
                                            d&apos;Auxerre.</p>
                                    </div>
                                </div>
                                <button onClick={() => scrollContent.current?.scrollTo({top: 0, behavior: 'smooth'})}
                                        className="absolute right-[20px] bottom-[20px] sm:right-[50px] sm:bottom-[50px] z-[1] bg-primary-50 w-[50px] h-[50px] flex justify-center items-center rounded-[48px] rounded-tl-[0px] shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
                                    <ArrowSmallUpIcon className="w-10 h-10 text-primary-700"/>
                                </button>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MentionsModal
