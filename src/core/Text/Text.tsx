import React, { Component } from 'react';
import { default as styled } from 'styled-components';
import { withSuomifiDefaultProps } from '../theme/utils';
import { TokensProp, ColorProp, InternalTokensProp } from '../theme';
import {
  Text as CompText,
  TextProps as CompTextProps,
} from '../../components/Text/Text';
import { baseStyles } from './Text.baseStyles';
import classnames from 'classnames';

const baseClassName = 'fi-text';
const smallScreenClassName = `${baseClassName}--small-screen`;

type TextVariant = 'body' | 'lead' | 'bold';

export interface TextProps extends CompTextProps, TokensProp {
  /** Change font to smaller screen size and style */
  smallScreen?: boolean;
  /** Change color for text from theme colors */
  color?: ColorProp;
  /**
   * Type of text-style
   * @default body
   */
  variant?: TextVariant;
}

const StyledText = styled(
  ({
    tokens,
    color,
    variant = 'body',
    smallScreen,
    className,
    ...passProps
  }: TextProps & InternalTokensProp) => (
    <CompText
      {...passProps}
      className={classnames(className, [`${baseClassName}--${variant}`], {
        [smallScreenClassName]: smallScreen,
      })}
    />
  ),
)`
  ${props => baseStyles(props)};
`;

/**
 * Used displaying text with correct fonts
 */
export class Text extends Component<TextProps> {
  static lead = (props: TextProps) => (
    <StyledText {...withSuomifiDefaultProps(props)} variant="lead" />
  );

  static bold = (props: TextProps) => (
    <StyledText {...withSuomifiDefaultProps(props)} variant="bold" />
  );

  render() {
    return <StyledText {...withSuomifiDefaultProps(this.props)} />;
  }
}
