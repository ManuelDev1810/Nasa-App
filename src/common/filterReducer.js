export const initialState = { filters: ["sol=1000", "", ""] };

export function filterReducer(prevState, action) {
    switch (action.type) {
    case "sol":
        if (action.payload > 0) {
            let newFilters = [...prevState.filters];
            newFilters[0] = `sol=${action.payload}`;
            return {
                filters: newFilters,
            };
        } else {
            let newFilters = [...prevState.filters];
            newFilters[0] = "sol=1000";
            return {
                filters: newFilters,
            };
        }
    case "camera":
        if (action.payload) {
            let newFilters = [...prevState.filters];
            newFilters[1] = `&camera=${action.payload}`;
            return {
                filters: newFilters,
            };
        } else {
            let newFilters = [...prevState.filters];
            newFilters[1] = "";
            return {
                filters: newFilters,
            };
        }
    case "earth_date":
        if (action.payload) {
            let newArray = [...prevState.filters];
            newArray[2] = `&earth_date=${action.payload}`;
            return {
                filters: newArray,
            };
        } else {
            let newArray = [...prevState.filters];
            newArray[2] = "";
            return {
                filters: newArray,
            };
        }
    case "initial":
        if (action.payload) {
            let newArray = [...action.payload];
            return {
                filters: newArray,
            };
        } else {
            return { ...prevState };
        }
    default:
        return { ...prevState };
    }
}
