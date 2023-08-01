/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HotelHistoryCardProps } from "./HotelHistoryCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelHistoryCardCollectionOverridesProps = {
    HotelHistoryCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    HotelHistoryCard?: HotelHistoryCardProps;
} & EscapeHatchProps;
export declare type HotelHistoryCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HotelHistoryCardProps;
} & {
    overrides?: HotelHistoryCardCollectionOverridesProps | undefined | null;
}>;
export default function HotelHistoryCardCollection(props: HotelHistoryCardCollectionProps): React.ReactElement;
