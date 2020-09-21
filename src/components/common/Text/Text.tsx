import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div(({ theme, preset }) => theme.textPresets[preset]);

type Preset = 'title' | 'subtitle' | 'sectionHeading' | 'sectionSubheading' | 'imageCaption' | 'paragraph' | 'button';

const presetWrapperTypes = {
  title: 'h1',
  subtitle: 'h2',
  sectionHeading: 'h3',
  sectionSubheading: 'h4',
  imageCaption: 'h6',
  paragraph: 'p',
  button: 'p',
};

type PresetAlias = 'cardHeading' | 'cardParagraph';

const presetAliases = {
  cardHeading: 'sectionHeading',
  cardParagraph: 'paragraph',
};

export interface TextProps {
  align?: any;
  color?: any;
  display?: any;
  wrap?: any;
  preset?: Preset | PresetAlias;
  wrapper?: any;
}

const Text: React.FC<TextProps> = props => {
  const finalPreset = presetAliases[props.preset] || props.preset || 'paragraph';
  const WrapperType = props.wrapper || presetWrapperTypes[finalPreset] || 'span';

  return (
    <TextWrapper as={ WrapperType } preset={ finalPreset }>
      {props.children}
    </TextWrapper>
  );
};

export { Text };
