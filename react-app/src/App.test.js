import App from "./App";
import { shallow } from "enzyme";
import Header from "./components/Header";
import TyreList from "./components/TyreList";
import Search from "./components/Search";

describe("App Tests", () =>{
  
  let appComponent;

  beforeEach(()=>{
    appComponent = shallow(<App />);
  });
  
  it("should render",() => {
    expect(appComponent).toBeTruthy();
  });

  it("should render one Header and one Search Component", () =>{
    expect(appComponent.find(Header).length).toBe(1);
    expect(appComponent.find(Search).length).toBe(1);
  });

  //use effect and api call functionality not tested
});
