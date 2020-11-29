import Search from "./Search";
import { shallow } from "enzyme";

describe("Search Tests", () =>{
  
  let searchComponent;
  const setSearchStrMock = jest.fn();
  const setHasSearchedMock = jest.fn();
  const setCurrentPageMock = jest.fn()
  const testSearchString = "test";
  const preventDefaultMock = jest.fn();
  

  beforeEach(()=>{
    searchComponent = shallow(<Search setSearchStr={setSearchStrMock} setHasSearched={setHasSearchedMock} setCurrentPage={setCurrentPageMock}/>);
    setSearchStrMock.mockClear();
  });
  
  it("should render",() => {
    expect(searchComponent).toBeTruthy();
  });

  it("should render search box and search button", () =>{
    expect(searchComponent.find("input[type='text']").length).toBe(1);
    expect(searchComponent.find("input[type='submit']").length).toBe(1);
  });

  it("should call e.preventDefault on button click", () => {
    expect(setSearchStrMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input[type='text']").simulate("change", {target:{value: testSearchString}});
    searchComponent.find("form").simulate("submit", { preventDefault: preventDefaultMock });
    expect(preventDefaultMock).toHaveBeenCalledTimes(1);
  });
  
  it("should call setSearchStr with input box value on button click", () => {
    expect(setSearchStrMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input[type='text']").simulate("change", {target:{value: testSearchString}});
    searchComponent.find("form").simulate("submit", { preventDefault: preventDefaultMock });
    expect(setSearchStrMock).toHaveBeenCalledTimes(1);
    expect(setSearchStrMock).toHaveBeenCalledWith(testSearchString);
  });

  it("should call setHasSearched with true on button click", () => {
    expect(setHasSearchedMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input[type='text']").simulate("change", {target:{value: testSearchString}});
    searchComponent.find("form").simulate("submit", { preventDefault: preventDefaultMock });
    expect(setHasSearchedMock).toHaveBeenCalledTimes(1);
    expect(setHasSearchedMock).toHaveBeenCalledWith(true);
  });

  it("should call setCurrentPage with 1 on button click", () => {
    expect(setHasSearchedMock).toHaveBeenCalledTimes(0);
    searchComponent.find("input[type='text']").simulate("change", {target:{value: testSearchString}});
    searchComponent.find("form").simulate("submit", { preventDefault: preventDefaultMock });
    expect(setCurrentPageMock).toHaveBeenCalledTimes(1);
    expect(setCurrentPageMock).toHaveBeenCalledWith(1);
  });
});  
