/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightFormOverridesProps = {
    FlightForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Flight Details"?: PrimitiveOverrideProps<TextProps>;
    TextField29767009?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29767010?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Additional Information"?: PrimitiveOverrideProps<TextProps>;
    TextField29767014?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29767015?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FlightFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FlightFormOverridesProps | undefined | null;
}>;
export default function FlightForm(props: FlightFormProps): React.ReactElement;
