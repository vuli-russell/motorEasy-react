import TyreCard from "./TyreCard";
import { shallow } from "enzyme";

describe("TyreCard Tests", () =>{
  
  let tyreCardComponent;
  let tyre = {
    id: 3,
    brand: "pirelli",
    size: 15
  }
  
  beforeEach(()=>{
    tyreCardComponent = shallow(<TyreCard tyre={tyre}/>);
  });
  
  it("should render",() => {
    expect(tyreCardComponent).toBeTruthy();
  });

  it("should render brand and size",() => {
    expect(tyreCardComponent.text().includes(tyre.brand)).toBeTruthy();
    expect(tyreCardComponent.text().includes(tyre.size)).toBeTruthy();
  });
});
