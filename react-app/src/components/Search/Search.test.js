import Search from "./Search";
import { shallow } from "enzyme";

describe("Search Tests", () =>{
  
  let searchComponent;
  const setSearchStrMock = jest.fn();
  const setHasSearchedMock = jest.fn();
  const setCurrentPageMock = jest.fn()
  const testSearchString = "test";
  

  beforeEach(()=>{
    searchComponent = shallow(<Search setSearchStr={setSearchStrMock} setHasSearched={setHasSearchedMock} setCurrentPage={setCurrentPageMock}/>);
    setSearchStrMock.mockClear();
  });
  
  it("should render",() => {
    expect(searchComponent).toBeTruthy();
  });

  it("should render search box and button", () =>{
    expect(searchComponent.find("button").length).toBe(1);
    expect(searchComponent.find("input").length).toBe(1);
  });
  
  it("should call setSearchStr with input box value on button click", () => {
    expect(setSearchStrMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input").simulate("change", {target:{value: testSearchString}})
    searchComponent.find("button").simulate("click")
    expect(setSearchStrMock).toHaveBeenCalledTimes(1);
    expect(setSearchStrMock).toHaveBeenCalledWith(testSearchString);
  });

  it("should call setHasSearched with true on button click", () => {
    expect(setHasSearchedMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input").simulate("change", {target:{value: testSearchString}})
    searchComponent.find("button").simulate("click")
    expect(setHasSearchedMock).toHaveBeenCalledTimes(1);
    expect(setHasSearchedMock).toHaveBeenCalledWith(true);
  });

  it("should call setCurrentPage with 1 on button click", () => {
    expect(setHasSearchedMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input").simulate("change", {target:{value: testSearchString}})
    searchComponent.find("button").simulate("click")
    expect(setCurrentPageMock).toHaveBeenCalledTimes(1);
    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });
});  
