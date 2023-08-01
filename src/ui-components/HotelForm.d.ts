/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelFormOverridesProps = {
    HotelForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Hotel Details"?: PrimitiveOverrideProps<TextProps>;
    TextField40462444?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40462445?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Additional Information"?: PrimitiveOverrideProps<TextProps>;
    TextField40462449?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40462450?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HotelFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HotelFormOverridesProps | undefined | null;
}>;
export default function HotelForm(props: HotelFormProps): React.ReactElement;
