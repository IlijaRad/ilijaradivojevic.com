import Head from "next/head";

export function getSocialMetas(
  url,
  title = "Ilija Radivojevic",
  description,
  image,
  keywords
) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title}></meta>
      {description ? (
        <>
          <meta name="description" content={description}></meta>
          <meta property="og:description" content={description}></meta>
        </>
      ) : null}
      {keywords ? <meta name="keywords" content={keywords}></meta> : null}
      {image ? <meta property="og:image" content={image}></meta> : null}
      {url ? (
        <>
          <link rel="canonical" href={url}></link>
          <meta property="og:url" content={url}></meta>
        </>
      ) : null}
    </Head>
  );
}
