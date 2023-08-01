/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Hotel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HotelUpdateFormInputValues = {
    name?: string;
    location?: string;
    price?: number;
    roomsAvailable?: number;
};
export declare type HotelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    roomsAvailable?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelUpdateFormOverridesProps = {
    HotelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    roomsAvailable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HotelUpdateFormProps = React.PropsWithChildren<{
    overrides?: HotelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hotel?: Hotel;
    onSubmit?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onSuccess?: (fields: HotelUpdateFormInputValues) => void;
    onError?: (fields: HotelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HotelUpdateFormInputValues) => HotelUpdateFormInputValues;
    onValidate?: HotelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HotelUpdateForm(props: HotelUpdateFormProps): React.ReactElement;
