import Header from "./Header";
import { shallow } from "enzyme";


describe("app Tests", () =>{
  
  let headerComponent;
  const setTyreDataMock = jest.fn();
  // const getTyresMock = jest.fn();
  const testSearchString = "test"

  jest.mock("../../services/apiService",() => ({getTyresMock: jest.fn()}))

  beforeEach(()=>{
    headerComponent = shallow(<Header setTyreData={setTyreDataMock}/>);
    setTyreDataMock.mockClear();
  });
  
  it("should render",() => {
    expect(headerComponent).toBeTruthy();
  });

  it("should render title, search box and search icon", () =>{
    expect(headerComponent.find("h1").length).toBe(1);
    expect(headerComponent.find("input").length).toBe(1);
  });

  it("should call function passed as props with data from getTyres called with input box value on button click",() =>{
    headerComponent.find("input").simulate("change", {target:{value: testSearchString}})
    headerComponent.find("button").simulate("click")
    expect(setTyreDataMock).toHaveBeenCalledWith(testSearchString)
  });
});
