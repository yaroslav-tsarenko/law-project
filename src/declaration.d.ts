declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export { ReactComponent };
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}