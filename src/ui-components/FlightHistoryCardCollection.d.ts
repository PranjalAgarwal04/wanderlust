/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlightHistoryCardProps } from "./FlightHistoryCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlightHistoryCardCollectionOverridesProps = {
    FlightHistoryCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    FlightHistoryCard?: FlightHistoryCardProps;
} & EscapeHatchProps;
export declare type FlightHistoryCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => FlightHistoryCardProps;
} & {
    overrides?: FlightHistoryCardCollectionOverridesProps | undefined | null;
}>;
export default function FlightHistoryCardCollection(props: FlightHistoryCardCollectionProps): React.ReactElement;
