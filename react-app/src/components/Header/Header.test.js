import Header from "./Header";
import { shallow } from "enzyme";

describe("Header Tests", () =>{

  let headerComponent;

  beforeEach(()=>{
    headerComponent = shallow(<Header />);
  });
  
  it("should render",() => {
    expect(headerComponent).toBeTruthy();
  });

  it("should render title", () =>{
    expect(headerComponent.find("h1").length).toBe(1);
    expect(headerComponent.text()).toBe("Tyre List");
  });
});
