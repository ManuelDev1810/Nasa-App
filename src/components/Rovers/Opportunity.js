import React, { useState, useReducer, useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { getOpportunities } from "../../reducers/opportunity";
import { columns } from "../../constans/columns";
import { filterReducer, initialState } from "../../common/filterReducer";

let isInitial = true;

export default function Spirit() {
  const data = useSelector((state) => state.opportunities);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filterState, setFilterState] = useReducer(filterReducer, initialState);

  const onLocalStorageChange = useCallback(() => {
    if (checked) {
      localStorage.setItem("opportunity", JSON.stringify(filterState.filters));
    } else if (checked === false) {
      localStorage.removeItem("opportunity");
    }
  }, [checked, filterState]);

  const getInitialStorage = useCallback(() => {
    let filter = JSON.parse(localStorage.getItem("opportunity"));
    if (filter) setChecked(true);
    setFilterState({ type: "initial", payload: filter });
  }, []);

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
    onLocalStorageChange();
  }, [checked, onLocalStorageChange]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getOpportunities(filterState.filters.join("")));
      setLoading(false);
    })();
  }, [dispatch, filterState]);

  const onFilterChange = useCallback((filterModel) => {
    setFilterState({
      type: filterModel.items[0].columnField,
      payload: filterModel.items[0].value,
    });
  }, []);

  const onSwitchChange = useCallback(() => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [checked]);

  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={() => onSwitchChange()}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Store Filters"
      />

      <DataGrid
        sx={{ width: 800 }}
        rows={data.opportunities}
        columns={columns}
        filterMode="server"
        onFilterModelChange={onFilterChange}
        loading={loading}
        pageSize={25}
      />
    </Box>
  );
}
