import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';


const TextCSS: FC = ({ children }, props) => {
  return (
    <p {...props}>
      {children}
    </p>
  );
};

export { TextCSS };
