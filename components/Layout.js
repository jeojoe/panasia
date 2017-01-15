import Head from 'next/head';

export default ({ children, title = 'Panasia Progressive Technology (PTT)' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav>
      Yo this is nav.
    </nav>
    { children }
    <footer>
      Well this is footer.
    </footer>
  </div>
);
