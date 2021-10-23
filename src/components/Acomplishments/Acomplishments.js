import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Personal Projects(including Mini-Projects)'},
  { number: 1000, text:'Competitive Coding Problems'},
  { number: 7, text:'Coursera Certifications'},
  { number: 20, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Activities </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;