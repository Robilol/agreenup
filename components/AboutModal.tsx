import React, {FC, Fragment, PropsWithChildren, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ArrowSmallUpIcon, XMarkIcon} from "@heroicons/react/20/solid";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const AboutModal: FC<ModalProps> = ({isOpen, onClose}) => {
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
                className="w-full max-w-[1340px] sm:max-h-[92vh] transform overflow-hidden bg-primary-900 rounded-[50px] rounded-tl-[0px] transition-all  font-hk-grotesk">
                <Dialog.Title
                  as="div"
                  className="flex flex-row items-center justify-between text-primary-50 p-5 sm:p-[50px] border-b-2 border-primary-800"
                >
                  <span className="font-sporting-grotesque font-bold text-[14px] sm:text-[18px]">Mon parcours</span>
                  <button className="flex items-center gap-2.5" onClick={onClose}>
                    <span className="font-bold text-[14px] sm:text-[18px]">Fermer</span>
                    <div
                      className="bg-primary-800 rounded-[48px] rounded-bl-[0px] flex items-center justify-center w-[32px] h-[32px]">
                      <XMarkIcon className="w-5 h-5"/>
                    </div>
                  </button>
                </Dialog.Title>
                <div className="p-5 pb-20 sm:p-[50px] relative overflow-y-auto max-h-[80vh] sm:max-h-[83vh]"
                     ref={scrollContent}>
                  <span
                    className="text-primary-50 text-[26px] leading-[36px] sm:text-[38px] sm:leading-[44px] font-sporting-grotesque">Le cheminement d&apos;une vie</span>
                  <div className="flex flex-col sm:flex-row gap-[50px] mt-5">
                    <div className="w-full sm:w-1/3 text-primary-50 text-[18px] leading-[22px] space-y-5 font-light">
                      <p>Je suis natif de Bar sur Aube (Aube), très jeune mes parents m&apos;ont initié au jardinage,
                        j&apos;ai
                        découvert rapidement ma passion pour l&apos;évolution des plantes et je recherchais des
                        challenges
                        pour les faire pousser le mieux possible comme avec les amaryllis à faire refleurir. J&apos;ai
                        un
                        brevet enseignement professionnel agricole (B.E.P.A) et un B.T.A brevet technicien agricole
                        (B.T.A) en productions florales puis j&apos;ai travaillé 16 ans dans les espaces verts. Je me
                        suis
                        formé à l&apos;école de permaculture en micro-ferme à Venansault. La nature m&apos;a toujours
                        ressourcé
                        d&apos;énergies positives.
                      </p>
                      <p>
                        La population a bien pris conscience que la Nature est l&apos;alliée indispensable à la vie.
                        Vivre
                        avec la Nature pour préserver la biodiversité et les futures générations.
                        Favoriser les circuits-courts, être en relation avec les cantines des écoles et les élus des
                        collectivités pour manger mieux, réduire les coûts des légumes et des fruits dans le pays de la
                        gastronomie.
                      </p>
                      <p>
                        Je fais une conférence sur le thème « La construction de l&apos;Avenir en symbiose avec la
                        nature » à
                        l&apos;Université Populaire &quot;IDEE UP à Belfort.
                      </p>
                      <p>
                        Nous pouvons nous nourrir avec des légumes sains qui ont du goût et qui sont riches en
                        nutriments avec des méthodes culturales qui utilisent une fertilisation naturelle en recyclant
                        les déchets verts.
                      </p>
                    </div>
                    <div className="w-full sm:w-1/3 text-primary-50 text-[18px] leading-[22px] space-y-5 font-light">
                      <p>
                        Le prix de revient est intéressant et leur méthode de conservation peuvent être variées et est
                        possible sans énergie aussi. Le temps passé s&apos;oriente surtout sur les récoltes, seulement
                        une
                        préparation du sol la première année avec une méthode culturale adaptée et suivie permet de
                        faire travailler à notre place la biodiversité, les artisans des sols...
                        C&apos;est aussi un plaisir de produire et de manger des légumes que l&apos;on cuisine!
                        J&apos;apprécie un proverbe qui est à mon goût, la quintessence de la vie : &quot;Ne donnes pas
                        au pêcheur
                        le poisson, mais apprends-lui à pêcher&quot;;
                        Je suis allé au Sahel au Burkina-Faso en mission Humanitaire. J&apos;ai donné des conseils en
                        permaculture pour renaturer des sols désertiques, composés essentiellement de latérite; le sable
                        rouge.
                        Volontaire pour animer &quot;la journée Mondiale des sols&quot;.
                        J&apos;interviens au &quot;Club Jardin&quot; dans un collège pour accompagner
                        l&apos;apprentissage de la
                        permaculture et la résilience des végétaux à la sécheresse avec des élèves qui travaillent en
                        collaboration en I.M.E, SEGPA, et enseignements généraux dans différents ateliers.
                      </p>
                    </div>
                    <div className="w-full sm:w-1/3">
                      <div className="w-[295px] h-[295px] sm:w-[380px] sm:h-[380px] relative">
                        <Image src="/img/img-about-details-1@2x.png" alt="" fill/>
                      </div>
                    </div>
                  </div>
                  <hr className="border-primary-800 my-[50px]"/>
                  <div className="flex flex-col items-center gap-2.5">
                    <span
                      className="text-primary-50 text-[26px] leading-[36px] sm:text-[38px] sm:leading-[44px] font-sporting-grotesque text-center">La passion de transmettre</span>
                    <span className="text-primary-50 text-[22px] leading-[26px] text-center">J&apos;interviens au Centre National de la Fonction Publique<br/>Territoriale où je donne trois stages.</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[50px] mt-[50px]">
                    <div className="w-full sm:w-1/3">
                      <div className="w-[295px] h-[615px] sm:w-[380px] sm:h-[785px] relative">
                        <Image src="/img/img-about-details-2@2x.png" alt="" fill/>
                      </div>
                    </div>
                    <div className="w-full sm:w-2/3 gap-[50px] flex flex-col">
                      <div className="flex flex-col gap-3">
                        <span className="font-bold text-primary-50 text-[18px] leading-[30px] font-sporting-grotesque">La connaissance du fonctionnement écologique des sols en interaction avec les plantes et le climat</span>
                        <p className="text-primary-50 text-[18px] leading-[22px] font-light">Un stage qui résume
                          l&apos;ensemble des interactions entre les acteurs de la biodiversité des sols en lien avec leurs
                          textures, leurs structures et le climat. Les relations entre les propriétés physiques,
                          biologiques et chimiques des sols comme les amendements et les fertilisations naturelles,
                          C.A.H, le Ph, le C.E.C, humidifications de la matière organique, le
                          potentiel &quot;rédox&quot;. Les
                          techniques de régulation de l&apos;eau dans le sol. Les sols reconstitués en milieu
                          urbain.</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span
                          className="font-bold text-primary-50 text-[18px] leading-[30px] font-sporting-grotesque">L&apos;amélioration de la fertilité des sols en espaces verts</span>
                        <p className="text-primary-50 text-[18px] leading-[22px] font-light">Ce stage rappelle les
                          besoins nutritifs des végétaux et la connaissance des différents milieux physiques, chimiques
                          et biologiques. Des analyses de sol sont réalisées avec des méthodes de prélèvements.
                          Des plans de fumure en amendements et en fertilisation sont intégrés et des méthodes
                          d&apos;analyses sont réalisées avec l&apos;interprétation des résultats.</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span
                          className="font-bold text-primary-50 text-[18px] leading-[30px] font-sporting-grotesque">L&apos;accompagnement du développement des jardins collectifs</span>
                        <p className="text-primary-50 text-[18px] leading-[22px] font-light">Les objectifs visés sont la
                          création des jardins collectifs différents comme les jardins pédagogiques, partagés,
                          familiaux, solidaires ou d’insertions avec les accompagnements techniques (aménagement,
                          viabilisation du site, suivi des projets). Les conseils en animations horticoles sont basés
                          sur les techniques de maraîchage et d’éco-jardinage, les potagers en carré en lien avec de la
                          médiation en visite dans un jardin collectif.</p>
                      </div>
                    </div>
                  </div>
                  <hr className="border-primary-800 my-[50px]"/>
                  <div className="w-full text-center mb-5">
                    <span
                      className="text-primary-50 text-[26px] leading-[36px] sm:text-[38px] sm:leading-[44px] font-sporting-grotesque">Des bases solides</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[50px]">
                    <div className="w-full sm:w-2/3 text-right space-y-5 order-2 sm:order-1">
                      <div className="flex flex-col">
                        <span className="text-primary-50 font-bold text-[18px] leading-[22px]">Brevet de technicien agricole (BTA), Productions Florales</span>
                        <span className="text-primary-100 text-[15px] leading-[18px]">Lycée Agricole Saint Germain en Laye</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-primary-50 font-bold text-[18px] leading-[22px]">Brevet enseignement agricole, Productions florales</span>
                        <span className="text-primary-100 text-[15px] leading-[18px]">Brie Comte Robert</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-primary-50 font-bold text-[18px] leading-[22px]">Attestation, Ecole de Permaculture en micro-ferme</span>
                        <span className="text-primary-100 text-[15px] leading-[18px]">Permaculture de Vernansault (Prés de la Roche-sur-Yon)</span>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/3 order-1 sm:order-2">
                      <div className="w-[295px] h-[295px] sm:w-[392px] sm:h-[400px] relative">
                        <Image src="/img/img-about-details-3@2x.png" alt="" fill/>
                      </div>
                    </div>
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

export default AboutModal
