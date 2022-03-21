import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { getSpirits } from "../../reducers/spirit";
import { columns } from "../../constans/columns";
import useFilter from "../../hooks/use-filter";
import LoadingMessage from "../UI/LoadingMessage";

export default function Spirit() {
    const data = useSelector((state) => state.spirits);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { checked, onFilterChange, onSwitchChange, filterState } = useFilter({
        localStorageName: "spirit",
    });

    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(getSpirits(filterState.filters.join("")));
            setLoading(false);
        })();
    }, [dispatch, filterState]);

    return (
        <Box>
            {data.spirits && data.spirits.length > 0 ? (
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
                        rows={data.spirits}
                        columns={columns}
                        filterMode="server"
                        onFilterModelChange={onFilterChange}
                        loading={loading}
                        pageSize={25}
                    />
                </>
            ) : (
                <LoadingMessage />
            )}
        </Box>
    );
}
