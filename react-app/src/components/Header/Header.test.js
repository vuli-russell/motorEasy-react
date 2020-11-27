import Header from "./Header";
import { shallow } from "enzyme";

describe("app Tests", () =>{
  
  let headerComponent;
  const setSearchString = jest.fn();
  const testSearchString = "test"

  beforeEach(()=>{
    headerComponent = shallow(<Header setSearchString={setSearchString}/>);
  });
  
  it("should render",() => {
    expect(headerComponent).toBeTruthy();
  });

  it("should render title, search box and search icon", () =>{
    expect(headerComponent.find("h1").length).toBe(1);
    expect(headerComponent.find("input").length).toBe(1);
  });

  it("should call function with value from input box on button click",() =>{
    headerComponent.find("input").simulate("change", {target:{value: testSearchString}})
    headerComponent.find("button").simulate("click")
    expect(setSearchString).toHaveBeenCalledWith(testSearchString)
  })
});
