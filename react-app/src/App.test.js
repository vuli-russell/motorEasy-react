import App from "./App";
import { shallow } from "enzyme";
import Header from "./components/Header";
import TyreList from "./components/TyreList";

describe("app Tests", () =>{
  
  let appComponent;

  beforeEach(()=>{
    appComponent = shallow(<App />);
  });
  
  it("should render",() => {
    expect(appComponent).toBeTruthy();
  })

  it("should render one Header and one Tyre List component", () =>{
    expect(appComponent.find(Header).length).toBe(1);
    expect(appComponent.find(TyreList).length).toBe(1);
  })
});
