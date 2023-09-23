import React, { ReactNode } from "react";
import classNames from "classnames";
import "./Text.scss";

export enum EnumTextStyle {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  Normal = "normal",
  Tag = "tag",
  Subtle = "subtle",
}

export enum EnumTextColor {
  Black20 = "black80",
  White = "black100",
  ThemeTurquoise = "theme-turquoise",
  ThemeBlue = "theme-blue",
  ThemeGreen = "theme-green",
  ThemeRed = "theme-red",
}

export enum EnumTextWeight {
  Regular = "regular",
  Bold = "bold",
  SemiBold = "semi-bold",
}

export type Props = {
  textStyle: EnumTextStyle;
  textWeight?: EnumTextWeight;
  textColor?: EnumTextColor;
  className?: string;
  children: ReactNode;
};

const STYLE_TO_TAG: { [key: string]: string } = {
  [EnumTextStyle.H1]: "h1",
  [EnumTextStyle.H2]: "h2",
  [EnumTextStyle.H3]: "h3",
  [EnumTextStyle.Normal]: "span",
  [EnumTextStyle.Tag]: "span",
  [EnumTextStyle.Subtle]: "span",
};

const CLASS_NAME = "amp-text";

export function Text({
  className,
  textStyle,
  textWeight,
  textColor,
  children,
}: Props) {
  const styleClassName = `${CLASS_NAME}--${textStyle}`;
  const weightClassName = textWeight && `${CLASS_NAME}--weight-${textWeight}`;
  const colorStyle = textColor && { color: `var(--${textColor})` };

  const TagName = STYLE_TO_TAG[textStyle] as keyof JSX.IntrinsicElements;

  return (
    <TagName
      className={classNames(
        CLASS_NAME,
        styleClassName,
        weightClassName,
        className
      )}
      style={colorStyle}
    >
      {children}
    </TagName>
  );
}