import { colorResolver } from './color-resolver/color-resolver';
import { fontSizeResolver } from './font-size-resolver/font-size-resolver';
import { spacingResolver } from './spacing-resolver/spacing-resolver';
import { identityResolver } from './identity-resolver/identity-resolver';
import { sizeResolver } from './size-resolver/size-resolver';
import { lineHeightResolver } from './line-height-resolver/line-height-resolver';
export declare const resolvers: {
    color: typeof colorResolver;
    fontSize: typeof fontSizeResolver;
    spacing: typeof spacingResolver;
    identity: typeof identityResolver;
    size: typeof sizeResolver;
    lineHeight: typeof lineHeightResolver;
};
export type StylePropType = keyof typeof resolvers;
