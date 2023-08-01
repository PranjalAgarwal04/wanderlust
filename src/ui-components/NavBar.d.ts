/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarOverridesProps = {
    NavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo4046500?: PrimitiveOverrideProps<FlexProps>;
    "Star 1"?: PrimitiveOverrideProps<IconProps>;
    Logo4046502?: PrimitiveOverrideProps<TextProps>;
    "Frame 3214046503"?: PrimitiveOverrideProps<FlexProps>;
    "Book Flight"?: PrimitiveOverrideProps<TextProps>;
    "Book Hotel"?: PrimitiveOverrideProps<TextProps>;
    Explore?: PrimitiveOverrideProps<TextProps>;
    "Past Bookings"?: PrimitiveOverrideProps<TextProps>;
    "Frame 3214046508"?: PrimitiveOverrideProps<FlexProps>;
    Button4046524?: PrimitiveOverrideProps<FlexProps>;
    label4046526?: PrimitiveOverrideProps<TextProps>;
    Button4046528?: PrimitiveOverrideProps<FlexProps>;
    label4046530?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarOverridesProps | undefined | null;
}>;
export default function NavBar(props: NavBarProps): React.ReactElement;
