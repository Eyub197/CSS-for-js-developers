import React from 'react';
import styled from 'styled-components';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  padding: 24px;

  @media ${props => props.theme.QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    gap: 32px;
  }


  @media ${props => props.theme.QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr 1.5fr 1.5fr;
    grid-template-areas: 
      "main-story main-story secondary-stories opinion-stories"
      "main-story main-story secondary-stories opinion-stories"
      "main-story main-story advertisement advertisement";
  }`;

const MainStorySection = styled.section`

  grid-area: main-story;
  @media ${props => props.theme.QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  ${props => props.theme.Utils.borderSpacing}


  @media ${props => props.theme.QUERIES.desktopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-inline-end: 16px;
    margin-inline-start: -16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  ${props => props.theme.Utils.borderSpacing}
  
  @media ${props => props.theme.QUERIES.tabletOnly} {
    ${props => props.theme.Utils.borderNone}
  }

  & > * {
    margin-inline-start: -16px;
    margin-top: -10px;
    
  }

`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${props => props.theme.QUERIES.desktopAndUp} {
  border-top: 1px solid var(--color-gray-300);
  padding-block-start: 16px ;
}
`;

const OpinionStoryList = styled(StoryList)`

@media ${props => props.theme.QUERIES.tabletOnly} {
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 32px;
}

@media ${props => props.theme.QUERIES.desktopAndUp} {
  margin-inline-start: -16px;
}
`

export default MainStoryGrid;
