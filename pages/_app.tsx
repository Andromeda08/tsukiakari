import '@Styles/app.scss';
import type { AppProps } from 'next/app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

library.add(faDiscord, faInstagram, faGithub, faLink);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
