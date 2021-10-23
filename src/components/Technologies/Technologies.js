import React from 'react';
import { DiAndroid, DiAtlassian, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section>
   <SectionDivider />
   <br />
   <SectionTitle> Technologies </SectionTitle>
   <SectionText> 
    I am an avid learner and an enthusiastic coder. I love to challenge myself with learning new technologies and solving real world problems daily. My passion for software lies in dreaming up ideas and making them come true with my perseverance and hard work. 
    </SectionText>

    <List>
      <ListItem>
        <DiReact size = "6rem" />
        <ListContainer>
          <ListTitle> Front-End </ListTitle>
          <ListParagraph> 
          Worked with various <br/>
          Javascript Libraries including ReactJS, NextJS and well-versed with Web-Design Fundamentals <br/>
          in HTML5, CSS3, Bootstrap. A regular Web-Dev Technology Practioner.
          </ListParagraph>
        </ListContainer>
        </ListItem>

        <ListItem>
        <ListContainer>
        <DiAtlassian size = "5rem" />
        <ListTitle> Problem-Solving </ListTitle>
          <ListParagraph> 
          6 Star Problem Solver @HackerRank along with 2700+ points <br/>
          Solved more than 900 problems from various coding platforms like LeetCode, CodeChef, CodeForces <br />
          Batch Topper For the First year of my undergraduate course. <br/>
          </ListParagraph>
          </ListContainer>
          </ListItem>

          <ListItem>
        <ListContainer>
        <DiAndroid size = "4rem" />
        <ListTitle> Software Engineering Interests</ListTitle>
          <ListParagraph> 
          1. Operating Systems      <br/>
          2. Database Management Systems     <br/>
          3. MicroControllers            <br />
          4. Data Structures And Algorithms   <br/>
          5. Python Data Structures        <br/>
          6. Structured Query Language     <br />
          </ListParagraph>
          </ListContainer>
          </ListItem>

    </List>
 </Section>
);

export default Technologies;
