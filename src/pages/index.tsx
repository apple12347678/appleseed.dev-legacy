import React from 'react';

import { useTranslation } from 'react-i18next';

import { SEO } from '../components';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Home" />
      <div>{t('test')}</div>
    </>
  );
}
