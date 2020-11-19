import Head from 'next/head'

export default function MyHead(props) {
    return (
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/icons/favicon.ico"/>

            <link rel="stylesheet" type="text/css" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>
    )
}