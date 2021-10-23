import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio 
      </SectionTitle>
      <SectionText>
       Hey there, I’m Shrishti Singh <br/> a Self motivated and passion driven individual who enjoys working upon real world problems. 
      </SectionText>

      <Button onClick = {() => window.location = "mailto://shrishtisingh0441@gmail.com" }>
       Email Me!!
       </Button>
    </LeftSection>

  </Section>
);

export default Hero;