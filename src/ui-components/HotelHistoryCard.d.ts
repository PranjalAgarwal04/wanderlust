/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HotelBooking } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelHistoryCardOverridesProps = {
    "20000"?: PrimitiveOverrideProps<TextProps>;
    HotelHistoryCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Badge40482773?: PrimitiveOverrideProps<FlexProps>;
    label40482774?: PrimitiveOverrideProps<TextProps>;
    Badge40482775?: PrimitiveOverrideProps<FlexProps>;
    label40482776?: PrimitiveOverrideProps<TextProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Taj Hotel"?: PrimitiveOverrideProps<TextProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "\u20B9\u200E"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HotelHistoryCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    hotelBooking?: HotelBooking;
} & {
    overrides?: HotelHistoryCardOverridesProps | undefined | null;
}>;
export default function HotelHistoryCard(props: HotelHistoryCardProps): React.ReactElement;
