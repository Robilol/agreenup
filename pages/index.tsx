import Head from 'next/head'
import Image from "next/image";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import cx from 'classnames'
import AboutModal from "@/components/AboutModal";
import MentionsModal from "@/components/MentionsModal";
import CgvModal from "@/components/CgvModal";
import MenuModal from "@/components/MenuModal";
import RandomMovingSplash from "@/components/RandomMovingSplash";

export default function Home() {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false)
  const [showMentionsModal, setMentionsModal] = useState<boolean>(false)
  const [showCgvModal, setCgvModal] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState(false)

  useLayoutEffect(() => {
    const onScroll = () => {
      if (contentRef?.current?.scrollTop! > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const div = contentRef.current;

    if (div) {
      div.addEventListener("scroll", onScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", onScroll);
      }
    };

  }, [])

  return (
    <>
      <Head>
        <title>Agreenup | Apprenez la permaculture en ligne avec Agreenup - Cours de formation en jardinage durable</title>
        <meta name="description" content="Apprenez les bases de la permaculture avec Agreenup, la plateforme de formation en ligne de Laurent Jarosz. Découvrez nos cours pratiques pour cultiver votre propre jardin durablement et respectueusement de l'environnement. Inscrivez-vous dès maintenant et rejoignez notre communauté de passionnés de la permaculture!"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link href="https://fonts.cdnfonts.com/css/hk-groteks" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/sporting-grotesque" rel="stylesheet"/>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"
                async/>
      </Head>
      <main className="font-hk-grotesk">
        <div className="z-[1] relative p-[20px] sm:p-[50px] overflow-y-scroll">
          <div className="max-w-[1380px] mx-auto">
            <div
              className={cx("border-primary-900 border-2 fixed flex items-center transition w-[calc(100%-40px)] sm:w-[calc(100%-100px)] lg:w-auto", {
                'bg-primary-50': isScrolled
              })}>
              <button
                onClick={() => document?.querySelector('#main')?.scrollTo({top: 0, behavior: 'smooth'})}
                className="w-[180px] pl-6 pr-[26px] py-3 border-primary-900 border-r-2 text-primary-900 font-bold text-[20px] sm:text-3xl">
                Agreenup
              </button>
              <div className="hidden px-5 py-2 text-primary-900 font-bold custom:flex space-x-10 items-center text-lg">
                <button onClick={() => document?.querySelector('#permaculture')?.scrollIntoView({
                  behavior: 'smooth'
                })}>La permaculture
                </button>
                <button onClick={() => document?.querySelector('#about')?.scrollIntoView({
                  behavior: 'smooth'
                })}>À propos
                </button>
                <button onClick={() => document?.querySelector('#formations')?.scrollIntoView({
                  behavior: 'smooth'
                })}>Les formations
                </button>
                <button
                  className="cursor-pointer text-center block px-5 py-1.5 bg-primary-600 text-primary-50 rounded-[40px] font-bold"
                  onClick={() => document?.querySelector('#formations')?.scrollIntoView({
                    behavior: 'smooth'
                  })}
                >
                  Réserver
                  une
                  formation
                </button>
              </div>
              <div className="custom:hidden w-full flex justify-end px-5">
                <button onClick={() => setShowMenu(true)}
                        className="text-[18px] leading-[22px] text-primary-900 font-bold underline">
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0">
          <RandomMovingSplash width={271} height={256} img="/vector-1.svg" left={0} top={0}/>
          <RandomMovingSplash width={402} height={365} img="/vector-2.svg" left={200} top={500}/>
          <RandomMovingSplash width={472} height={429} img="/vector-3.svg" left={800} top={400}/>
          <RandomMovingSplash width={650} height={501} img="/vector-4.svg" left={1000} top={1200}/>
          <RandomMovingSplash width={300} height={231} img="/vector-5.svg" left={1200} top={400}/>
          <RandomMovingSplash width={506} height={470} img="/vector-6.svg" left={0} top={1000}/>
        </div>
        <div className="backdrop-blur-[75px] bac bg-primary-50/50 fixed inset-0 overflow-y-auto" id="main"
             ref={contentRef}>
          <div className='p-[20px] sm:p-[50px]'>
            <div className="max-w-[1380px] w-full relative flex flex-col mx-auto">
              <div
                className="border-primary-900 border-2 border-b-0 pt-28 pb-6 pl-6 pr-6 sm:pt-40 sm:pb-24 sm:pl-40 sm:pr-60 flex flex-col sm:flex-row gap-[50px] sm:gap-32">
                <div className="w-full sm:w-1/2 items-center flex order-2 sm:order-1">
                  <div className="text-primary-900">
                  <h1
                    className="text-[30px] leading-[42px] sm:text-[44px] sm:leading-[54px] mb-5 block w-86 font-sporting-grotesque">Apprendre la permaculture en 2h</h1>
                    <p className="w-full text-[22px] leading-[26px]">Produire son potager et ses plantes décoratives en
                      résilience avec la sécheresse grâce aux méthodes culturales naturelles.</p>
                    <button
                      onClick={() => document?.querySelector('#formations')?.scrollIntoView({
                        behavior: 'smooth'
                      })}
                      className="px-5 py-2.5 bg-primary-600 text-primary-50 rounded-[40px] mt-8 text-[18px] leading-[22px] font-bold">Réserver
                      une formation
                    </button>
                  </div>
                </div>
                <div
                  className="w-full sm:w-1/2 flex flex-row sm:flex-col gap-2.5 sm:gap-6 items-center order-1 sm:order-2">
                  <div className="w-full h-auto p-[25%] sm:p-0 sm:w-[323px] sm:h-[323px] relative">
                    <Image src="/img/img-home-1@2x.png" alt="" fill/>
                  </div>
                  <div className="w-full h-auto p-[25%] sm:p-0 sm:w-[323px] sm:h-[323px] relative">
                    <Image src="/img/img-home-2@2x.png" alt="" fill/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-1/2 border-t-2 border-primary-900"></div>
                <div className="w-1/2 border-x-2 border-b-2 border-primary-900 h-12 sm:h-20"></div>
                <div className="sm:hidden w-6 border-t-2 border-primary-900 h-12 sm:h-20"></div>
              </div>
              <div className="flex w-full justify-center">
                <div className="px-6 sm:px-0 flex flex-col w-full max-w-[1020px] -mt-[2px] -mr-[3px] sm:-mr-0">
                  <div className="w-full flex">
                    <div
                      id="permaculture"
                      className="w-full sm:w-1/2 border-l-2 border-t-2 border-r-2 sm:border-r-0 border-primary-900 text-primary-900 flex items-center sm:px-7 scroll-mt-[110px]">
                      <h2
                        className="text-[30px] leading-[42px] py-4 px-6 sm:p-0 text-center sm:text-left sm:text-[44px] sm:leading-[54px] font-sporting-grotesque">La permaculture</h2>
                    </div>
                    <div className="hidden sm:block w-1/2 border-l-2 border-b-0 border-primary-900 h-20"></div>
                  </div>
                  <div
                    className="border-2 border-b-0 border-primary-900 px-6 py-12 sm:px-12 sm:py-24 flex flex-col gap-[50px]">
                    <div className="flex flex-col sm:flex-row gap-[50px]">
                      <div className="w-full sm:w-1/2">
                        <div
                          className="w-full h-auto p-[50%] max-w-[255px] max-h-[255px] sm:w-[470px] sm:h-[470px] relative">
                          <Image src="/img/img-permaculture@2x.png" alt="" fill/>
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 space-y-3">
                        <p className="text-[18px] leading-[22px] text-primary-900">La permaculture est un concept qui
                          englobe à la fois une méthode de conception durable pour les systèmes humains et une
                          philosophie
                          de vie. Le mot « Permaculture » est une contraction de
                          « culture permanente ». Vivre avec la nature, prélever ce qu’elle nous donne tout en la
                          respectant pour les générations actuelles et futures. Renaturer les sols et cultiver son
                          jardin
                          naturellement avec des connaissances bien structurées pour satisfaire les besoins de sa
                          famille
                          et de ses proches.</p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          L’autonomie alimentaire est une belle approche pour le développement durable.
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          Produire ses graines jusqu’à la récolte, il y a tout un chemin minutieux à parcourir en
                          redécouvrant du sens à ce que l’on fait. La conservation et le recyclage des déchets verts
                          font
                          partie intégrante de ce cercle vertueux. Chacun de nous peut apporter sa pierre à l’édifice.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[50px]">
                      <div className="w-full sm:w-1/2 space-y-3">
                        <p className="text-[18px] leading-[22px] text-primary-900">La qualité des aliments du potager
                          est notre santé. Elle dépend aussi de la vie des sols, notre « Terre Mère ».
                          « Prendre soins de la terre » est l’un des piliers fondamentaux de la permaculture défendu par
                          Bill Mollison et David Holmgren pères du terme
                          « permaculture ».
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          Selon Bill Mollison et David Holmgren « Le second pilier est de « prendre soins des hommes et
                          des femmes » en réunissant les forces et les ressources pour réaliser des actions collectives
                          ».
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          « Le partage équitable en créant une abondance alimentaire, des liens sociaux, d’écologie et
                          même menée financièrement pour que chacun puisse vivre confortablement et équitablement ».
                        </p>
                      </div>
                      <div className="w-full sm:w-1/2 space-y-3">
                        <p className="text-[18px] leading-[22px] text-primary-900">Le bien-être se ressource sur des
                          choses simples de la vie comme le Bonheur.
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          Aujourd’hui, vu le contexte actuel entre le prix de production des fruits et des légumes et le
                          temps qu’il nous reste pour faire du jardin ; ce modèle cultural est beaucoup plus simple que
                          le modèle traditionnel et moins cher. Vous faites travailler à votre place ce que la nature
                          vous donne.
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          Vous favorisez la biodiversité dans son écosystème équilibré et vous le nourrissez pour le
                          rendre pérenne.
                        </p>
                        <p className="text-[18px] leading-[22px] text-primary-900">
                          La résilience à la sécheresse et aux canicules est tout à fait possible en appliquant quelques
                          connaissances et de nouvelles habitudes durablement dans votre jardin.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row w-full">
                    <div className="w-1/2 border-t-2 border-primary-900"></div>
                    <div className="w-1/2 border-x-2 border-primary-900 h-12 sm:h-20"></div>
                  </div>
                </div>
              </div>
              <div id="about"
                   className="border-primary-900 border-2 border-b-0 pt-12 pb-6 pl-6 pr-6 sm:pt-40 sm:pb-24 sm:pl-40 sm:pr-40 flex flex-col sm:flex-row gap-16">
                <div className="w-full sm:w-1/2 items-center flex order-2 sm:order-1">
                  <div className="text-primary-900">
                    <h2
                      className="text-[30px] leading-[42px] sm:text-[44px] sm:leading-[54px] mb-5 block font-sporting-grotesque">Je suis<br/>Laurent Jarozs, formateur et passionné</h2>
                    <p className="w-full"><img className="mr-2 inline-block" src="/img/icon-plume.svg" alt="" width={20} height={24}/>Mes parents m&apos;ont transmis leur amour du jardin ce qui m&apos;a permis de
                      découvrir
                      ma passion pour les plantes. Depuis mon enfance je me suis toujours intéressé à
                      l&apos;épanouissement
                      des plantes pour obtenir des fleurs nombreuses et colorées. J&apos;ai à cœur de transmettre mes
                      connaissances sur la permaculture, afin de préserver la biodiversité et les générations
                      futures.</p>
                    <button onClick={() => setShowAboutModal(true)}
                            className="px-5 py-2.5 bg-primary-600 text-primary-50 rounded-[40px] mt-8 font-bold">En
                      savoir plus
                    </button>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-6 items-center order-1 sm:order-2">
                  <div className="w-[295px] h-[295px] sm:w-[485px] sm:h-[485px] relative">
                    <Image src="/img/img-about@2x.png" alt="" fill/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full">
                <div className="w-1/2 border-x-2 border-b-2 border-primary-900 h-12 sm:h-20"></div>
                <div className="w-1/2 border-t-2 border-primary-900"></div>
              </div>
              <div className="flex w-full justify-center">
                <div className="px-6 sm:px-0 flex flex-col w-full max-w-[1020px] -mt-[2px]">
                  <div className="w-full flex">
                    <div className="hidden sm:block w-1/2 border-r-2 border-b-0 border-primary-900 h-20"></div>
                    <div
                      id="formations"
                      className="w-full sm:w-1/2 border-l-2 sm:border-l-0 border-r-2 border-t-2 border-primary-900 text-primary-900 flex items-center px-7 scroll-mt-[110px]">
                      <h2
                        className="text-center sm:text-left text-[30px] leading-[42px] sm:text-[44px] sm:leading-[54px] py-4 px-6 sm:p-0 font-sporting-grotesque">Les formations</h2>
                    </div>
                  </div>
                  <div className="border-2 border-primary-900 flex flex-col">
                    <div className="bg-primary-900 p-2.5 flex justify-center">
                      <span
                        className="text-[15px] leading-[18px] text-center sm:text-left text-primary-200 font-medium">Les formations sont réalisées par visio-conférence et en groupe, jusqu&apos;à 15 participants</span>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full">
                      <div className="w-full sm:w-1/2 px-4 py-8 sm:p-24 flex flex-col items-center">
                      <h3
                        className="font-sporting-grotesque text-primary-700 font-bold text-[18px] leading-[30px] mb-6 sm:mb-[50px] text-center sm:text-left">Un jardin en autonomie</h3>
                        <span
                          className="font-sporting-grotesque text-primary-900 text-[26px] leading-[36px] sm:text-[38px] sm:leading-[44px]">25 €</span>
                        <span className="text-primary-700 font-medium text-[15px] leading-[15px]">par personne</span>
                        <span className="text-primary-900 font-bold text-[15px] leading-[18px] mt-[50px]">Formation simplifiée en 1h30, puis temps d&apos;échange de 30 minutes pour répondre à vos questions.</span>
                        <ul
                          className="list-disc text-primary-900 font-medium text-[15px] leading-[18px] px-6 mt-2.5 space-y-1">
                          <li>La relation systémique entre les sols, les plantes et le climat</li>
                          <li> La vie des microbiotes des sols, la santé commence par le respect de la Terre
                            nourricière.
                          </li>
                          <li>L&apos;association des plantes entre elles pour favoriser leur croissance et leur défense.
                          </li>
                          <li>La rotation des cultures</li>
                          <li>Le recyclage des déchets verts</li>
                          <li>Le paillage</li>
                          <li>Les engrais verts</li>
                          <li>Produire ses graines et les conserver.</li>
                        </ul>
                        <button
                          onClick={() => {
                            // @ts-ignore
                            Calendly.initPopupWidget({url: 'https://calendly.com/robin-regis78/jardin-en-autonomie'});
                            return false;
                          }}
                          className="px-5 py-2.5 bg-primary-600 text-primary-50 rounded-[40px] mt-8 text-[18px] leading-[22px] w-full font-bold">Réserver
                        </button>
                      </div>
                      <div
                        className="w-full sm:w-1/2 px-4 py-8 sm:p-24 flex flex-col items-center border-t-2 sm:border-t-0  sm:border-l-2 border-primary-900">
                      <h3
                        className="font-sporting-grotesque text-primary-700 font-bold text-[18px] leading-[30px] mb-6 sm:mb-[50px] text-center sm:text-left">Les plantes à la maison</h3>
                        <span
                          className="font-sporting-grotesque text-primary-900 text-[38px] leading-[44px]">25 €</span>
                        <span className="text-primary-700 font-medium text-[15px] leading-[15px]">par personne</span>
                        <span className="text-primary-900 font-bold text-[15px] leading-[18px] mt-[50px]">Formation simplifiée en 1h30, puis temps d&apos;échange de 30 minutes pour répondre à vos questions.</span>
                        <ul
                          className="list-disc text-primary-900 font-medium text-[15px] leading-[18px] px-6 mt-2.5 space-y-1">
                          <li>La croissance des plantes et comment pallier les facteurs limitants dans un environnement
                            clos.
                          </li>
                          <li>Les substrats</li>
                          <li>L&apos;arrosage</li>
                          <li>Le fleurissement</li>
                          <li>Garder ses plantes l&apos;hiver.</li>
                          <li>Fertiliser naturellement ses plantes d&apos;intérieur dès le printemps.</li>
                        </ul>
                        <button
                          onClick={() => {
                            // @ts-ignore
                            Calendly.initPopupWidget({url: 'https://calendly.com/robin-regis78/jardin-en-autonomie'});
                            return false;
                          }}
                          className="px-5 py-2.5 bg-primary-600 text-primary-50 rounded-[40px] mt-8 text-[18px] leading-[22px] sm:mt-auto w-full font-bold">Réserver
                        </button>
                      </div>
                    </div>
                    <div className="border-t-2 border-primary-900 px-4 py-8 sm:p-24 flex flex-col">
                      <span
                        className="font-sporting-grotesque text-primary-900 text-[26px] leading-[36px] sm:text-[38px] sm:leading-[44px]">Sur-mesure</span>
                      <h2 className="font-sporting-grotesque font-bold text-[14px] leading-[23px] text-primary-700">Vous êtes une école, un collège, un lycée, un particulier, un groupe… ?</h2>
                      <div className="mt-6 sm:mt-[50px] flex flex-col sm:flex-row sm:gap-32">
                        <div className="w-full sm:w-1/2 text-primary-900 flex flex-col">
                          <span className="text-[18px] leading-[22px]">Vous souhaitez réaliser une formation de permaculture selon certaines conditions ?</span>
                          <span className="font-medium text-[15px] leading-[15px] mt-2.5">Je m&apos;adapte à vos besoins en réalisant des formations sur-mesures.</span>
                          <span className="font-medium text-[15px] leading-[15px] mt-5">Ces formations peuvent être réalisées en visio-conférence ou en physique.</span>
                        </div>
                        <div className="w-full sm:w-1/2">
                          <a
                            href="mailto:agreenup89@gmail.fr"
                            className="cursor-pointer text-center px-5 py-2.5 bg-primary-600 text-primary-50 rounded-[40px] text-[18px] leading-[22px] mt-10 w-full max-w-[314px] mx-auto font-bold block">Demander
                            un devis
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-900">
            <div className="max-w-[1020px] px-10 pt-5 sm:px-0 w-full relative flex flex-col mx-auto sm:pt-[50px]">
              <div className="w-full flex flex-col sm:flex-row gap-[50px]">
                <div className="flex flex-col">
                  <span className="font-bold text-primary-50 text-[18px] mb-5">Agreenup</span>
                  <span className="text-primary-50 text-[18px]">Laurent Jarosz, formateur & freelance</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-primary-50 text-[18px] mb-5">Réseaux sociaux</span>
                  <a href="https://www.linkedin.com/in/laurent-jarosz-825701263/" target="_blank" className="text-primary-50 text-[18px] underline">LinkedIn</a>
                  {/*<a href="#" target="_blank" className="text-primary-50 text-[18px] underline">Instagram</a>*/}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-primary-50 text-[18px] mb-5">Envie d&apos;échanger ?</span>
                  <a
                    href="mailto:agreenup89@gmail.fr"
                    className="block text-center px-5 py-2.5 text-primary-600 bg-primary-50 rounded-[40px] text-[18px] leading-[22px] font-bold">Me
                    contacter
                  </a>
                </div>
              </div>
              <div
                className="w-full border-t border-primary-600 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 py-5 text-primary-200 text-[15px] mt-[50px]">
                <span>© 2023 Agreenup</span>
                <div className="hidden sm:block rounded-full w-[6px] h-[6px] bg-primary-200"></div>
                <button onClick={() => setMentionsModal(true)} className="underline">Mentions légales</button>
                <div className="hidden sm:block rounded-full w-[6px] h-[6px] bg-primary-200"></div>
                <button onClick={() => setCgvModal(true)} className="underline">Conditions générales de vente</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <AboutModal isOpen={showAboutModal} onClose={() => setShowAboutModal(false)}/>
      <MentionsModal isOpen={showMentionsModal} onClose={() => setMentionsModal(false)}/>
      <CgvModal isOpen={showCgvModal} onClose={() => setCgvModal(false)}/>
      <MenuModal isOpen={showMenu} onClose={() => setShowMenu(false)} onLinkClick={(anchor) => {
        document?.querySelector(anchor)?.scrollIntoView({
          behavior: 'smooth'
        })
        setTimeout(() => {
          setShowMenu(false)
        }, 1000)
      }
      }/>
    </>
  );
}
