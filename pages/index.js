import Head from 'next/head'

export default function Index() {
    return (
      <div>
        <Head>
        <title>Listedby UK</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" ></link>

        </Head>
        <h1>Listedby</h1>
        <h2>Website Under Construction</h2>
        <style jsx>{`
		  h1 {
            font-size: 3rem;
            text-align:center;
          },
          h2 {
            text-align:center;
          }
		`}</style>
      </div>
    );
  }