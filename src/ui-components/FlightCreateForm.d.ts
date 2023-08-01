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
export declare type FlightCreateFormInputValues = {
    name?: string;
    number?: number;
    departureDate?: string;
    arrivalDate?: string;
    from?: string;
    to?: string;
    seatsAvailable?: number;
    price?: number;
    route?: string[];
};
export declare type FlightCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    number?: ValidationFunction<number>;
    departureDate?: ValidationFunction<string>;
    arrivalDate?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    seatsAvailable?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    route?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightCreateFormOverridesProps = {
    FlightCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    departureDate?: PrimitiveOverrideProps<TextFieldProps>;
    arrivalDate?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    seatsAvailable?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    route?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FlightCreateFormProps = React.PropsWithChildren<{
    overrides?: FlightCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FlightCreateFormInputValues) => FlightCreateFormInputValues;
    onSuccess?: (fields: FlightCreateFormInputValues) => void;
    onError?: (fields: FlightCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FlightCreateFormInputValues) => FlightCreateFormInputValues;
    onValidate?: FlightCreateFormValidationValues;
} & React.CSSProperties>;
export default function FlightCreateForm(props: FlightCreateFormProps): React.ReactElement;
