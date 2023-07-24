/**
 * Declaration file for importing image files in TypeScript.
 * Supports importing PNG, JPG, and SVG files as modules.
 * @module format
 */

declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
