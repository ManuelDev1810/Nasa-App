import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { getOpportunities } from "../../reducers/opportunity";
import { columns } from "../../constans/columns";
import useFilter from "../../hooks/use-filter";
import LoadingMessage from "../UI/LoadingMessage";

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
                        sx={{ width: 1300, height: 700 }}
                        rows={data.opportunities}
                        columns={columns}
                        filterMode="server"
                        onFilterModelChange={onFilterChange}
                        loading={loading}
                        pageSize={25}
                        getRowHeight={({densityFactor }) => 500 * densityFactor}
                    />
                </>
            ) : (
                <LoadingMessage />
            )}
        </Box>
    );
}
