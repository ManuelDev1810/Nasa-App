import { render, screen } from "../../test-utils";
import App from "../../App";

const initialState = {
  curiosities: {
    curiosities: [],
  },
  opportunities: {
    opportunities: [
      {
        id: 141044,
        sol: 1000,
        camera: {
          id: 16,
          name: "NAVCAM",
          rover_id: 6,
          full_name: "Navigation Camera",
        },
        img_src:
          "http://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950L0M1-BR.JPG",
        earth_date: "2006-11-17",
        rover: {
          id: 6,
          name: "Opportunity",
          landing_date: "2004-01-25",
          launch_date: "2003-07-07",
          status: "complete",
        },
      },
    ],
  },
  spirits: {
    spirits: [],
  },
};

describe("Opportunity component", () => {
  it("should fill opportunity table when there is data available", () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, { route: "/opportunity" });

    //Act

    //Assert
    expect(screen.getByText("141044")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();
    expect(
      screen.getByText("Navigation Camera")
    ).toBeInTheDocument();
    expect(screen.getByText("Opportunity")).toBeInTheDocument();
  });
});
