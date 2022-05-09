import Head from 'next/head';

function PageTitle({ title, description = '' }) {
    return (
        <Head>
            <title>Woven Magazine {title}</title>
            <meta name='viewport' content='width=device-width' />
            <meta name='description' content={description} />
        </Head>
    );
}

export default PageTitle;
