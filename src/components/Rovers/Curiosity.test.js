import { render, screen } from "../../test-utils";
import App from "../../App";

const initialState = {
    curiosities: {
        curiosities: [
            {
                id: 654002,
                sol: 2000,
                camera: {
                    id: 20,
                    name: "FHAZ",
                    rover_id: 5,
                    full_name: "Front Hazard Avoidance Camera",
                },
                img_src:
          "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02000/opgs/edr/fcam/FLB_575055503EDR_F0682626FHAZ00337M_.JPG",
                earth_date: "2018-03-22",
                rover: {
                    id: 5,
                    name: "Curiosity",
                    landing_date: "2012-08-06",
                    launch_date: "2011-11-26",
                    status: "active",
                },
            },
        ],
    },
    opportunities: {
        opportunities: [],
    },
    spirits: {
        spirits: [],
    },
};

describe("Curiosity component", () => {
    it("should fill curiosity table when there is data available", () => {
    //Arrange
        render(<App />, { preloadedState: initialState }, { route: "/" });

        //Act

        //Assert
        expect(screen.getByText("654002")).toBeInTheDocument();
        expect(screen.getByText("2000")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02000/opgs/edr/fcam/FLB_575055503EDR_F0682626FHAZ00337M_.JPG");
        expect(screen.getByText("Curiosity")).toBeInTheDocument();
    });
});
