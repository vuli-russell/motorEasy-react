import Header from "./Header";
import { shallow } from "enzyme";
import * as apiService from "../../services/apiService";

describe("app Tests", () =>{
  
  const mockTyres = [
    {
        brand: "pirelli",
        size: 10
    },
    {
        brand: "firestone",
        size: 12
    },
    {
        brand: "pirelli",
        size: 15
    }
  ] 

  let headerComponent;
  const setTyreDataMock = jest.fn();
  const testSearchString = "test";
  apiService.getTyres = jest.fn();

  beforeEach(()=>{
    headerComponent = shallow(<Header setTyreData={setTyreDataMock}/>);
    setTyreDataMock.mockClear();
    apiService.getTyres.mockClear();
    apiService.getTyres.mockReturnValue(mockTyres);
  });
  
  it("should render",() => {
    expect(headerComponent).toBeTruthy();
  });

  it("should render title, search box and search icon", () =>{
    expect(headerComponent.find("h1").length).toBe(1);
    expect(headerComponent.find("input").length).toBe(1);
  });

  it("should call getTyres called with input box value on button click", async () =>{
    expect(apiService.getTyres).toHaveBeenCalledTimes(0)
    headerComponent.find("input").simulate("change", {target:{value: testSearchString}})
    await headerComponent.find("button").simulate("click")
    expect(apiService.getTyres).toHaveBeenCalledWith(testSearchString);
    expect(setTyreDataMock).toHaveBeenCalledWith(mockTyres);
  });
});
