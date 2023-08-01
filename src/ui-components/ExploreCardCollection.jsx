/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Location } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ExploreCard from "./ExploreCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ExploreCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Location,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      itemsPerPage={10}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "ExploreCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <ExploreCard
          location={item}
          height="auto"
          width="auto"
          margin="2rem 2rem 2rem 2rem"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ExploreCard>
      )}
    </Collection>
  );
}
