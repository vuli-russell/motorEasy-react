import TyreCard from "./TyreCard";
import { shallow } from "enzyme";

describe("TyreCard Tests", () =>{
  
  let tyreCardComponent;
  let tyre =  {
    "_id": "5fc2d186c2fdef44a05cacf1",
    "amazon_link": "amazonLink",
    "price": "£73.31",
    "size": "225/45Z17",
    "model": "Cinturato P7",
    "brand": "Pirelli",
    "rating": "4.7 out of 5 stars",
    "image": "imageSource",
    "title": "Pirelli Cinturato P7"
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
