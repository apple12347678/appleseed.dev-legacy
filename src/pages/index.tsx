import React from 'react';

import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { Container, SEO } from '../components';

const BannerContainer = styled.div`
  padding: 0 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Home" />
      <Container>
        <BannerContainer>
          <Title>{t('index.title')}</Title>
          <p>{t('index.introduction')}</p>
        </BannerContainer>
      </Container>
    </>
  );
}
