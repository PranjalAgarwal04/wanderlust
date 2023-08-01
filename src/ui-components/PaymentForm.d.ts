/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentFormOverridesProps = {
    "20000"?: PrimitiveOverrideProps<TextProps>;
    PaymentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    "Card Details"?: PrimitiveOverrideProps<TextProps>;
    TextField40462707?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40462708?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40462744?: PrimitiveOverrideProps<TextFieldProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "\u20B9\u200E"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PaymentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PaymentFormOverridesProps | undefined | null;
}>;
export default function PaymentForm(props: PaymentFormProps): React.ReactElement;
