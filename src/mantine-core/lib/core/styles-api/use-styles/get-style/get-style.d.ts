import { CSSProperties } from 'react';
import { MantineTheme } from '../../../MantineProvider';
import { MantineStyleProp } from '../../../Box';
import { GetStylesApiOptions } from '../../styles-api.types';
import { VarsResolver } from './resolve-vars/resolve-vars';
export type _Styles = undefined | Partial<Record<string, CSSProperties>> | ((theme: MantineTheme, props: Record<string, any>, ctx: Record<string, any> | undefined) => Partial<Record<string, CSSProperties>>);
export interface GetStyleInput {
    theme: MantineTheme;
    themeName: string[];
    selector: string;
    rootSelector: string;
    options: GetStylesApiOptions | undefined;
    props: Record<string, any>;
    stylesCtx: Record<string, any> | undefined;
    styles: _Styles;
    style: MantineStyleProp | undefined;
    vars: VarsResolver | undefined;
    varsResolver: VarsResolver | undefined;
}
export declare function getStyle({ theme, themeName, selector, options, props, stylesCtx, rootSelector, styles, style, vars, varsResolver, }: GetStyleInput): CSSProperties;
