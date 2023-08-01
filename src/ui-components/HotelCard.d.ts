/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Hotel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCardOverridesProps = {
    "20000"?: PrimitiveOverrideProps<TextProps>;
    HotelCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Taj Hotel"?: PrimitiveOverrideProps<TextProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    "\u20B9\u200E"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HotelCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    hotel?: Hotel;
} & {
    overrides?: HotelCardOverridesProps | undefined | null;
}>;
export default function HotelCard(props: HotelCardProps): React.ReactElement;
