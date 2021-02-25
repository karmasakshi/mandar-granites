import Page from '@components/page/page';
import Image from 'next/image';
import { FunctionComponent, ReactElement } from 'react';

const Home: FunctionComponent = (): ReactElement => (

  <Page title="">

    <div className="mt-24"></div>

    <Image alt="Logo" height={240} src="/logo.png" width={240} />

    <div className="mt-4 text-2xl">

      <h1>Premium granites,<br />sourced from coveted mines of India.</h1>

      <a className="inline-block mt-2 px-2 hover:text-gray-500" href="https://wa.me/+919821141289?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products." rel="noreferrer" target="_blank">
        <Image alt="WhatsApp logo" height={20} objectFit="contain" src="/whatsapp.svg" width={20} />
        <span className="font-bold">&nbsp;Contact Us</span>
      </a>

    </div>

  </Page>

);

export default Home;
