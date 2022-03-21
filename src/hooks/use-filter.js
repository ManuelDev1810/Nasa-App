import { useState, useReducer, useEffect, useCallback } from "react";
import { filterReducer, initialState } from "../common/filterReducer";

let isInitial = true;

const useFilter = ({localStorageName}) => {
  const [checked, setChecked] = useState("null");
  const [filterState, setFilterState] = useReducer(filterReducer, initialState);

  const localStorageChange = useCallback(() => {
    if (checked === "true") {
      localStorage.setItem(localStorageName, JSON.stringify(filterState.filters));
    } else if (checked === "false") {
      localStorage.removeItem(localStorageName);
    }
  }, [checked, filterState, localStorageName]);

  const onFilterChange = useCallback((filterModel) => {
    setFilterState({
      type: filterModel.items[0].columnField,
      payload: filterModel.items[0].value,
    });
  }, []);

  const getInitialStorage = useCallback(() => {
    let filter = JSON.parse(localStorage.getItem(localStorageName));
    if (filter) setChecked("true");
    setFilterState({ type: "initial", payload: filter });
  }, [localStorageName]);

  const onSwitchChange = useCallback(() => {
    if (checked === "true") {
      setChecked("false");
    } else {
      setChecked("true");
    }
  }, [checked]);

  useEffect(() => {
    setTimeout(() => {
      getInitialStorage();
    }, 1000);
  }, [getInitialStorage]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    localStorageChange();
  }, [checked, localStorageChange]);

  return {
    checked,
    setChecked,
    onFilterChange,
    localStorageChange,
    onSwitchChange,
    filterState,
    setFilterState
  }
};

export default useFilter;
