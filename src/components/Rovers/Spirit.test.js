import { render, screen } from "../../test-utils";
import App from "../../App";

const initialState = {
  curiosities: {
    curiosities: [],
  },
  opportunities: {
    opportunities: [],
  },
  spirits: {
    spirits: [
      {
        id: 301536,
        sol: 1000,
        camera: {
          id: 29,
          name: "NAVCAM",
          rover_id: 7,
          full_name: "Navigation Camera",
        },
        img_src:
          "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215136972EDNAS00P1585L0M1-BR.JPG",
        earth_date: "2006-10-27",
        rover: {
          id: 7,
          name: "Spirit",
          landing_date: "2004-01-04",
          launch_date: "2003-06-10",
          status: "complete",
        },
      },
    ],
  },
};

describe("Spirit component", () => {
  it("should fill spirit table when there is data available", () => {
    //Arrange
    render(
      <App />,
      { preloadedState: initialState },
      { route: "/spirit" }
    );

    //Act

    //Assert
    expect(screen.getByText("301536")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(screen.getByText("Navigation Camera")).toBeInTheDocument();
    expect(screen.getByText("Spirit")).toBeInTheDocument();
  });
});
