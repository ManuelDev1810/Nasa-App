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
    spirits: [],
  },
};

describe("Navigation component", () => {
  it("should render curiosity when it navigates to the '/' route", () => {
    //Arrange
    render(<App />,{ preloadedState: initialState }, { route: "/" });

    //Act

    //Assert
    expect(screen.getByText("Curiosity")).toHaveAttribute(
      "class",
      "MuiBottomNavigationAction-label Mui-selected css-imwso6-MuiBottomNavigationAction-label"
    );
  });

  it("should render Opportunity when it navigates to the '/opportunity' route", () => {
    //Arrange
    render(
      <App />,
      { preloadedState: initialState },
      { route: "/opportunity" }
    );

    //Act

    //Assert
    expect(screen.getByText("Opportunity")).toHaveAttribute(
      "class",
      "MuiBottomNavigationAction-label Mui-selected css-imwso6-MuiBottomNavigationAction-label"
    );
  });

  it("should render Spirit when it navigates to the '/spirit' route", () => {
    //Arrange
    render(<App />, { preloadedState: initialState }, { route: "/spirit" });

    //Act

    //Assert
    expect(screen.getByText("Spirit")).toHaveAttribute(
      "class",
      "MuiBottomNavigationAction-label Mui-selected css-imwso6-MuiBottomNavigationAction-label"
    );
  });
});
