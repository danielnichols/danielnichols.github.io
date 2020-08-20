/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

type ResponsiveImageOutput = {
  src: string,
  srcSet: string,
  placeholder: string,
  images: {path: string, width: number, height: number}[],
  width: number,
  height: number
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: ResponsiveImageOutput;
  export default content;
}

declare module '*.jpeg' {
  const content: ResponsiveImageOutput;
  export default content;
}

declare module '*.png' {
  const content: ResponsiveImageOutput;
  export default content;
}

declare module '*.webp' {
    const content: ResponsiveImageOutput;
    export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
