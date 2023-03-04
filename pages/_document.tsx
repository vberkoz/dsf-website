import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden bg-gray-100 dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
