/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlightCardProps } from "./FlightCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightCardCollectionOverridesProps = {
    FlightCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    FlightCard?: FlightCardProps;
} & EscapeHatchProps;
export declare type FlightCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FlightCardProps;
} & {
    overrides?: FlightCardCollectionOverridesProps | undefined | null;
}>;
export default function FlightCardCollection(props: FlightCardCollectionProps): React.ReactElement;
