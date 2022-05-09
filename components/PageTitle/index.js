import Head from 'next/head';

function PageTitle({ title, description = '' }) {
    title = title
        ?.split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    return (
        <Head>
            <title>Woven Magazine {title}</title>
            <meta name='viewport' content='width=device-width' />
            <meta name='description' content={description} />
        </Head>
    );
}

export default PageTitle;
