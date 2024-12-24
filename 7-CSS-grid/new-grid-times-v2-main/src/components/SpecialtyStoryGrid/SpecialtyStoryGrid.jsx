import React from 'react';
import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${props => props.theme.QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

const MarketsSection = styled.section`
  @media ${props => props.theme.QUERIES.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-inline-end: 16px;
    margin-inline-end: 16px;
  }
`;

const MarketCards = styled.div`
  ${props => props.theme.Utils.mostUsedGridSnippet}
`;

const SportsSection = styled.section`
    @media ${props => props.theme.QUERIES.tabletAndUp} {
      overflow: auto;
    }
    margin-inline-start: -32px;
`;

const SportsStories = styled.div`
  ${props => props.theme.Utils.mostUsedGridSnippet}

  @media ${props => props.theme.QUERIES.tabletAndUp} {
    display: flex;
  }
`;

export default SpecialtyStoryGrid;
