/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HotelCreateFormInputValues = {
    name?: string;
    location?: string;
    price?: number;
    roomsAvailable?: number;
};
export declare type HotelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    roomsAvailable?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCreateFormOverridesProps = {
    HotelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    roomsAvailable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelCreateFormProps = React.PropsWithChildren<{
    overrides?: HotelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onSuccess?: (fields: HotelCreateFormInputValues) => void;
    onError?: (fields: HotelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelCreateFormInputValues) => HotelCreateFormInputValues;
    onValidate?: HotelCreateFormValidationValues;
} & React.CSSProperties>;
export default function HotelCreateForm(props: HotelCreateFormProps): React.ReactElement;
