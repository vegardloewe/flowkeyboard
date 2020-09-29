import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="benefits">
    <StyledContainer>
      <Subtitle>Benefits</Subtitle>
      <SectionTitle>Opens a new universe of sounds</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>No workarounds</FeatureTitle>
          <FeatureText>
            Utilizing backlit keys, the key pattern will fit any tuning system. Seamlessly switch between any number of notes per octave. No more stickers with note names or playing two pianos simultaneously.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Tuning possibilities</FeatureTitle>
          <FeatureText>
            Each key can be tuned individually for complete musical freedom. Flow helps you easily wrap your mind around most tuning systems with well laid out editing tools. Save, load, and share your tuning presets.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Connectivity</FeatureTitle>
          <FeatureText>
            The keyboard will be fully support MIDI 2.0 and MPE over USB, DIN or mini jack and Bluetooth Low Energy. There will also be gate and CV outputs to interface with modular gear.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Sequencing</FeatureTitle>
          <FeatureText>
            Flow will have an onboard sequencer. Even if you stick to your normal 12-tone system, it will function as a flexible and powerful performance tool.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
