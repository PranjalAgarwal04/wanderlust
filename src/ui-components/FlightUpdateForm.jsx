/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flight } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function FlightUpdateForm(props) {
  const {
    id: idProp,
    flight: flightModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    number: "",
    departureDate: "",
    arrivalDate: "",
    from: "",
    to: "",
    seatsAvailable: "",
    price: "",
    route: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [number, setNumber] = React.useState(initialValues.number);
  const [departureDate, setDepartureDate] = React.useState(
    initialValues.departureDate
  );
  const [arrivalDate, setArrivalDate] = React.useState(
    initialValues.arrivalDate
  );
  const [from, setFrom] = React.useState(initialValues.from);
  const [to, setTo] = React.useState(initialValues.to);
  const [seatsAvailable, setSeatsAvailable] = React.useState(
    initialValues.seatsAvailable
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [route, setRoute] = React.useState(initialValues.route);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = flightRecord
      ? { ...initialValues, ...flightRecord }
      : initialValues;
    setName(cleanValues.name);
    setNumber(cleanValues.number);
    setDepartureDate(cleanValues.departureDate);
    setArrivalDate(cleanValues.arrivalDate);
    setFrom(cleanValues.from);
    setTo(cleanValues.to);
    setSeatsAvailable(cleanValues.seatsAvailable);
    setPrice(cleanValues.price);
    setRoute(cleanValues.route ?? []);
    setCurrentRouteValue("");
    setErrors({});
  };
  const [flightRecord, setFlightRecord] = React.useState(flightModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Flight, idProp)
        : flightModelProp;
      setFlightRecord(record);
    };
    queryData();
  }, [idProp, flightModelProp]);
  React.useEffect(resetStateValues, [flightRecord]);
  const [currentRouteValue, setCurrentRouteValue] = React.useState("");
  const routeRef = React.createRef();
  const validations = {
    name: [],
    number: [],
    departureDate: [],
    arrivalDate: [],
    from: [],
    to: [],
    seatsAvailable: [],
    price: [],
    route: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          number,
          departureDate,
          arrivalDate,
          from,
          to,
          seatsAvailable,
          price,
          route,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Flight.copyOf(flightRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FlightUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              number,
              departureDate,
              arrivalDate,
              from,
              to,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              number: value,
              departureDate,
              arrivalDate,
              from,
              to,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        }}
        onBlur={() => runValidationTasks("number", number)}
        errorMessage={errors.number?.errorMessage}
        hasError={errors.number?.hasError}
        {...getOverrideProps(overrides, "number")}
      ></TextField>
      <TextField
        label="Departure date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={departureDate && convertToLocal(new Date(departureDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate: value,
              arrivalDate,
              from,
              to,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.departureDate ?? value;
          }
          if (errors.departureDate?.hasError) {
            runValidationTasks("departureDate", value);
          }
          setDepartureDate(value);
        }}
        onBlur={() => runValidationTasks("departureDate", departureDate)}
        errorMessage={errors.departureDate?.errorMessage}
        hasError={errors.departureDate?.hasError}
        {...getOverrideProps(overrides, "departureDate")}
      ></TextField>
      <TextField
        label="Arrival date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={arrivalDate && convertToLocal(new Date(arrivalDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate: value,
              from,
              to,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.arrivalDate ?? value;
          }
          if (errors.arrivalDate?.hasError) {
            runValidationTasks("arrivalDate", value);
          }
          setArrivalDate(value);
        }}
        onBlur={() => runValidationTasks("arrivalDate", arrivalDate)}
        errorMessage={errors.arrivalDate?.errorMessage}
        hasError={errors.arrivalDate?.hasError}
        {...getOverrideProps(overrides, "arrivalDate")}
      ></TextField>
      <TextField
        label="From"
        isRequired={false}
        isReadOnly={false}
        value={from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate,
              from: value,
              to,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.from ?? value;
          }
          if (errors.from?.hasError) {
            runValidationTasks("from", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("from", from)}
        errorMessage={errors.from?.errorMessage}
        hasError={errors.from?.hasError}
        {...getOverrideProps(overrides, "from")}
      ></TextField>
      <TextField
        label="To"
        isRequired={false}
        isReadOnly={false}
        value={to}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate,
              from,
              to: value,
              seatsAvailable,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.to ?? value;
          }
          if (errors.to?.hasError) {
            runValidationTasks("to", value);
          }
          setTo(value);
        }}
        onBlur={() => runValidationTasks("to", to)}
        errorMessage={errors.to?.errorMessage}
        hasError={errors.to?.hasError}
        {...getOverrideProps(overrides, "to")}
      ></TextField>
      <TextField
        label="Seats available"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={seatsAvailable}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate,
              from,
              to,
              seatsAvailable: value,
              price,
              route,
            };
            const result = onChange(modelFields);
            value = result?.seatsAvailable ?? value;
          }
          if (errors.seatsAvailable?.hasError) {
            runValidationTasks("seatsAvailable", value);
          }
          setSeatsAvailable(value);
        }}
        onBlur={() => runValidationTasks("seatsAvailable", seatsAvailable)}
        errorMessage={errors.seatsAvailable?.errorMessage}
        hasError={errors.seatsAvailable?.hasError}
        {...getOverrideProps(overrides, "seatsAvailable")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate,
              from,
              to,
              seatsAvailable,
              price: value,
              route,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              number,
              departureDate,
              arrivalDate,
              from,
              to,
              seatsAvailable,
              price,
              route: values,
            };
            const result = onChange(modelFields);
            values = result?.route ?? values;
          }
          setRoute(values);
          setCurrentRouteValue("");
        }}
        currentFieldValue={currentRouteValue}
        label={"Route"}
        items={route}
        hasError={errors?.route?.hasError}
        errorMessage={errors?.route?.errorMessage}
        setFieldValue={setCurrentRouteValue}
        inputFieldRef={routeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Route"
          isRequired={false}
          isReadOnly={false}
          value={currentRouteValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.route?.hasError) {
              runValidationTasks("route", value);
            }
            setCurrentRouteValue(value);
          }}
          onBlur={() => runValidationTasks("route", currentRouteValue)}
          errorMessage={errors.route?.errorMessage}
          hasError={errors.route?.hasError}
          ref={routeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "route")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || flightModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || flightModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
