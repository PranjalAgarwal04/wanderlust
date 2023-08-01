/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ExploreCardProps } from "./ExploreCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExploreCardCollectionOverridesProps = {
    ExploreCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ExploreCard?: ExploreCardProps;
} & EscapeHatchProps;
export declare type ExploreCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ExploreCardProps;
} & {
    overrides?: ExploreCardCollectionOverridesProps | undefined | null;
}>;
export default function ExploreCardCollection(props: ExploreCardCollectionProps): React.ReactElement;
