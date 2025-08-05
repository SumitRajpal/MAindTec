/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type TextType = "title" | "subtitle" | "heading1" | "heading2" | "heading3" | "normal" | "warning" | "error" | 'success' | 'small' | 'xsmall' | 'xxsmall';

type TextProps = {
      type?: TextType;
      children?: any;
      className?: string;
};

const textStyles: Record<TextType, string> = {
      title: "text-4xl font-bold",
      subtitle: "text-2xl font-semibold",
      heading1: "text-3xl font-bold",
      heading2: "text-2xl font-bold",
      heading3: "text-xl font-semibold",
      normal: "text-base font-normal",
      small: "text-sm font-normal",
      xsmall: "text-xs font-normal",
      xxsmall: "text-[10px] font-normal",
      warning: "text-yellow-400 font-normal",
      success: "text-green-400 font-normal",
      error: "text-red-400 font-normal",
};

const Text: React.FC<TextProps> & {
      Small: React.FC<TextProps>;
      XSmall: React.FC<TextProps>;
      XXSmall: React.FC<TextProps>;
      Title: React.FC<TextProps>;
      Subtitle: React.FC<TextProps>;
      Heading1: React.FC<TextProps>;
      Heading2: React.FC<TextProps>;
      Heading3: React.FC<TextProps>;
      Warning: React.FC<TextProps>;
      Success: React.FC<TextProps>;
      Error: React.FC<TextProps>;
} = ({ type = "normal", children, className = "" }) => {

      function getText(): string {
            if (!children) return ""; // Handle empty children properly
            return children ?? "";
      }

      const text = getText();

      return <span className={`${textStyles[type]} ${className}`}>{text}</span>;
};

Text.Title = ({ children, className = "" }) => <Text type="title" className={className}>{children}</Text>;
Text.Small = ({ children, className = "" }) => <Text type="small" className={className}>{children}</Text>;
Text.XSmall = ({ children, className = "" }) => <Text type="xsmall" className={className}>{children}</Text>;
Text.XXSmall = ({ children, className = "" }) => <Text type="xxsmall" className={className}>{children}</Text>;
Text.Subtitle = ({ children, className = "" }) => <Text type="subtitle" className={className}>{children}</Text>;
Text.Heading1 = ({ children, className = "" }) => <Text type="heading1" className={className}>{children}</Text>;
Text.Heading2 = ({ children, className = "" }) => <Text type="heading2" className={className}>{children}</Text>;
Text.Heading3 = ({ children, className = "" }) => <Text type="heading3" className={className}>{children}</Text>;
Text.Warning = ({ children, className = "" }) => <Text type="warning" className={className}>{children}</Text>;
Text.Error = ({ children, className = "" }) => <Text type="error" className={className}>{children}</Text>;
Text.Success = ({ children, className = "" }) => <Text type="success" className={className}>{children}</Text>;

Text.Title.displayName = "Text.Title";
Text.Small.displayName = "Text.Small";
Text.XSmall.displayName = "Text.XSmall";
Text.XXSmall.displayName = "Text.XXSmall";
Text.Subtitle.displayName = "Text.Subtitle";
Text.Heading1.displayName = "Text.Heading1";
Text.Heading2.displayName = "Text.Heading2";
Text.Heading3.displayName = "Text.Heading3";
Text.Warning.displayName = "Text.Warning";
Text.Error.displayName = "Text.Error";
Text.Success.displayName = "Text.Success";
export default Text;