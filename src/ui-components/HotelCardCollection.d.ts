/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HotelCardProps } from "./HotelCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HotelCardCollectionOverridesProps = {
    HotelCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    HotelCard?: HotelCardProps;
} & EscapeHatchProps;
export declare type HotelCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HotelCardProps;
} & {
    overrides?: HotelCardCollectionOverridesProps | undefined | null;
}>;
export default function HotelCardCollection(props: HotelCardCollectionProps): React.ReactElement;
