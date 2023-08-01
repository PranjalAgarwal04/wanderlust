/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Flight } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightCardOverridesProps = {
    "4884"?: PrimitiveOverrideProps<TextProps>;
    "20000"?: PrimitiveOverrideProps<TextProps>;
    FlightCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Badge40482765?: PrimitiveOverrideProps<FlexProps>;
    label40482766?: PrimitiveOverrideProps<TextProps>;
    Badge40482767?: PrimitiveOverrideProps<FlexProps>;
    label40482768?: PrimitiveOverrideProps<TextProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Indian Airways"?: PrimitiveOverrideProps<TextProps>;
    "Frame 424"?: PrimitiveOverrideProps<FlexProps>;
    "\u20B9\u200E"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label40462570?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FlightCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    flight?: Flight;
} & {
    overrides?: FlightCardOverridesProps | undefined | null;
}>;
export default function FlightCard(props: FlightCardProps): React.ReactElement;
