import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

import frMessages from 'intl/fr.json';
import enMessages from 'intl/en.json';

const messages = {
  fr: frMessages,
  en: enMessages,
};

const defaultRichTextElements = {
  br: (chunks: any) => <br className={chunks} />,
  b: (chunks: any) => <b>{chunks}</b>,
  sup: (chunks: any) => <sup>{chunks}</sup>,
};

interface IntlProviderProps {
  children: ReactNode;
}

export const IntlProvider = ({ children }: IntlProviderProps) => {
  const { locale } = useRouter();

  return (
    <ReactIntlProvider
      key={locale}
      locale={locale}
      messages={messages[locale]}
      defaultRichTextElements={defaultRichTextElements}
    >
      {children}
    </ReactIntlProvider>
  );
};
