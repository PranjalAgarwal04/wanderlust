/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlightBooking } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightHistoryCardOverridesProps = {
    "20000"?: PrimitiveOverrideProps<TextProps>;
    FlightHistoryCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Badge40482769?: PrimitiveOverrideProps<FlexProps>;
    label40482770?: PrimitiveOverrideProps<TextProps>;
    Badge40482771?: PrimitiveOverrideProps<FlexProps>;
    label40482772?: PrimitiveOverrideProps<TextProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Indian Airways"?: PrimitiveOverrideProps<TextProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Delhi?: PrimitiveOverrideProps<TextProps>;
    "-"?: PrimitiveOverrideProps<TextProps>;
    Mumbai?: PrimitiveOverrideProps<TextProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    "\u20B9\u200E"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FlightHistoryCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    flightBooking?: FlightBooking;
} & {
    overrides?: FlightHistoryCardOverridesProps | undefined | null;
}>;
export default function FlightHistoryCard(props: FlightHistoryCardProps): React.ReactElement;
