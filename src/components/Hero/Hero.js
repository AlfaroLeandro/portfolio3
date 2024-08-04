import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Leandro Alfaro
        </SectionTitle>
        <SectionText>
        Software Engineer, Technical Leader.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>Curriculum</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
