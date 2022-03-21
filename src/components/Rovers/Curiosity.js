import React, { useState, useReducer, useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { getCuriosities } from "../../reducers/curiosity";
import { columns } from "../../constans/columns";
import { filterReducer, initialState } from "../../common/filterReducer";
import { Typography } from "@mui/material";

let isInitial = true;

export default function Spirit() {
  const data = useSelector((state) => state.curiosities);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState("null");
  const [loading, setLoading] = useState(false);
  const [filterState, setFilterState] = useReducer(filterReducer, initialState);

  const localStorageChange = useCallback(() => {
    if (checked === "true") {
      localStorage.setItem("curiosity", JSON.stringify(filterState.filters));
    } else if (checked === "false") {
      localStorage.removeItem("curiosity");
    }
  }, [checked, filterState]);

  const getInitialStorage = useCallback(() => {
    let filter = JSON.parse(localStorage.getItem("curiosity"));
    if (filter) setChecked("true");
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
    localStorageChange();
  }, [checked, localStorageChange]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getCuriosities(filterState.filters.join("")));
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
    if (checked === "true") {
      setChecked("false");
    } else {
      setChecked("true");
    }
  }, [checked]);

  return (
    <Box>
      {data.curiosities && data.curiosities.length > 0 ? (
        <>
          <FormControlLabel
            control={
              <Switch
                checked={checked === "true" ? true : false}
                onChange={() => onSwitchChange()}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Store Filters"
          />
          <DataGrid
            sx={{ width: 800 }}
            rows={data.curiosities}
            columns={columns}
            filterMode="server"
            onFilterModelChange={onFilterChange}
            loading={loading}
            pageSize={25}
          />
        </>
      ) : (
        <>
          <Typography align={"center"}>Loading.....</Typography>
          <Typography>
            if data is not available in a few seconds "The API might be failing"
          </Typography>
        </>
      )}
    </Box>
  );
}
