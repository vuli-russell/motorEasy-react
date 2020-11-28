import TyreList from "./TyreList";
import TyreCard from "./TyreCard"
import { shallow } from "enzyme";

describe("Tyre List Tests", () =>{
  
  let tyreListComponent;
   const mockTyres = [
    {
      id: 1,
      brand: "pirelli",
      size: 10
    },
    {
      id: 2,
      brand: "firestone",
      size: 12
    },
    {
      id: 3,
      brand: "pirelli",
      size: 15
    }
  ]
  
  const setCurrentPageMock = jest.fn();

  const currentPageMock = 1;

  beforeEach(()=>{
    tyreListComponent = shallow(<TyreList tyreData={mockTyres} currentPage={currentPageMock} setCurrentPage={setCurrentPageMock} />);
    setCurrentPageMock.mockClear();
  });
  
  it("should render",() => {
    expect(tyreListComponent).toBeTruthy();
  });

  it("should contain no cards, and a message saying No Tyres Found if no tyres are passed",() => {
    tyreListComponent = shallow(<TyreList tyreData={[]} currentPage={currentPageMock} setCurrentPage={setCurrentPageMock} />);
    expect(tyreListComponent.find(TyreCard).length).toBe(0);
    expect(tyreListComponent.find("p").text()).toBe("No Tyres Found")
  })

  it("should contain 1 card component for each tyre passed to it in tyreData",() => {
    expect(tyreListComponent.find(TyreCard).length).toBe(mockTyres.length)
    tyreListComponent = shallow(<TyreList tyreData={[...mockTyres,...mockTyres]} currentPage={currentPageMock} setCurrentPage={setCurrentPageMock} />);
    expect(tyreListComponent.find(TyreCard).length).toBe(mockTyres.length * 2)
  })

  it("should call setCurrentPage with next page on load more click",  () =>{
    expect(setCurrentPageMock).toHaveBeenCalledTimes(0);
    tyreListComponent.find("button").simulate("click");
    expect(setCurrentPageMock).toHaveBeenCalledTimes(1);
    expect(setCurrentPageMock).toHaveBeenCalledWith(currentPageMock + 1); 
  });
});
