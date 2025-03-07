/// <reference types="react" />
import { FactoryPayload, StaticComponents, ThemeExtend, ComponentClasses } from './factory';
import { PolymorphicComponentProps } from './create-polymorphic-component';
export interface PolymorphicFactoryPayload extends FactoryPayload {
    defaultComponent: any;
    defaultRef: any;
}
export declare function polymorphicFactory<Payload extends PolymorphicFactoryPayload>(ui: React.ForwardRefRenderFunction<Payload['defaultRef'], Payload['props']>): (<C = Payload["defaultComponent"]>(props: PolymorphicComponentProps<C, Payload["props"]>) => React.ReactElement) & Omit<import("react").FunctionComponent<(Payload["props"] & {
    component?: any;
} & Omit<Omit<any, "ref">, "component" | keyof Payload["props"]> & {
    ref?: any;
}) | (Payload["props"] & {
    component: import("react").ElementType<any>;
})>, never> & ThemeExtend<Payload> & ComponentClasses<Payload> & StaticComponents<Payload["staticComponents"]>;
