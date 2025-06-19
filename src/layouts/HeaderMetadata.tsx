import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Iqbal Alyansyah&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Iqbal Alyansyah, Full Stack web developer "
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Iqbal Alyansyah. A Full Stack web developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="iqbal Alyansyah"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
