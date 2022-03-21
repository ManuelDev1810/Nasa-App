import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { getOpportunities } from "../../reducers/opportunity";
import { columns } from "../../constans/columns";
import { Typography } from "@mui/material";
import useFilter from "../../hooks/use-filter";

export default function Spirit() {
  const data = useSelector((state) => state.opportunities);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { checked, onFilterChange, onSwitchChange, filterState } = useFilter({
    localStorageName: "opportunity",
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      await dispatch(getOpportunities(filterState.filters.join("")));
      setLoading(false);
    })();
  }, [dispatch, filterState]);

  return (
    <Box>
      {data.opportunities && data.opportunities.length > 0 ? (
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
            rows={data.opportunities}
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
