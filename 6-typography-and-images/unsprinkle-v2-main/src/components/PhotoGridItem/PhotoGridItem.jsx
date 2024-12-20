import React from 'react';
import styled from 'styled-components';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    // here just add the same way you did for the hero and shit but just with the srcSet use the replace shit 
    <article>
      <Anchor href={`/photos/${id}`}>
      <picture>
      <source 
        type="image/avif"
        srcSet={`
          ${src.replace('.jpg', '.avif')},
          ${src.replace('.jpg', '@2x.avif')},
          ${src.replace('.jpg', '@3x.avif')},
          `}
      />
       <source 
        type="image/jpg"
        srcSet={`
          ${src.replace('.jpg', '.jpg"')},
          ${src.replace('.jpg', '@2x.jpg"')},
          ${src.replace('.jpg', '@3x.jpg"')},
          `}
      />
        <Image src={src}  alt={alt} />
      </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
