export const DartCodeBlock = ({ children, filename = "example.dart" }) =>
<CodeBlock
    filename={filename}
    language="dart"
    icon="water"
    wrap="true"
    lines="true"
    expandable="false"
>
    {children}
</CodeBlock>;

export const CustomCodeBlock = ({ filename, icon, language, highlight, children }) => {
  return (
    <CodeBlock
      filename={filename}
      icon={icon}
      language={language}
      lines
      highlight={highlight}
    >
      {children}
    </CodeBlock>
  );
};