import Head from 'next/head'
import {Coutdown} from "@/components/Coutdown";

export default function Home() {
  return (
    <>
      <Head>
        <title>Agreenup</title>
        <meta name="description" content="Laurent Jarozs, formateur et passionné de permaculture"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://fonts.cdnfonts.com/css/hk-groteks" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/sporting-grotesque" rel="stylesheet"/>
      </Head>
      <main className="font-hk-grotesk bg-[url('/bg.jpg')] h-screen w-screen bg-cover">
        <div className="h-screen w-screen backdrop-blur-sm bg-black/20 flex items-center justify-center flex-col gap-12">
          <div
            className="text-primary-50 font-hk-grotesk font-bold text-7xl sm:text-9xl">
            Agreenup
          </div>
          <Coutdown targetDate={new Date('2023-04-24T23:59:59')} />
        </div>
      </main>
    </>
  );
}
