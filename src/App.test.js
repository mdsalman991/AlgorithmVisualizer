import React, {Component} from 'react';
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import BinarySearch from "./binarySearchComponent/binarySearch";
import EntryPoint from "./binarySearchComponent/entryPoint";
import search from "./binarySearchComponent/search";




it("renders without crashing shallow", () => {
  const wrapper=shallow(<App />);
  console.log(wrapper.debug());
});
it("renders without crashing mount", () => {
  const wrapper=mount(
    <MemoryRouter initialEntries={['/']}>
      <BinarySearch />
    </MemoryRouter>
  );
  console.log(wrapper.debug())
});

describe('<BinarySearch />',() =>{

  let wrapper1;
  let wrapper2;
  let compo;
  beforeEach(() =>{
    wrapper1=mount(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
    wrapper2=shallow(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
  });

  it('CHECK INITIAL STATES',() =>{
    // wrapper1.handleStartGame();
    expect(wrapper1.find(BinarySearch).instance().state).toEqual({ upper:100,
                                                                    lower:0,
                                                                    max:100,
                                                                    isRunning:false});
  });
  it('CHECK HANDLE START GAME FUNCTION',() =>{
    let compo=wrapper1.find(BinarySearch).instance();
    compo.handleStartGame();
    expect(compo.state).toEqual({ upper:100,
      lower:0,
      max:100,
      isRunning:true});  
    
  });

  it('CHECK START GAME BUTTON ',() =>{
  
    const wrapper3=mount(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
    const btn=wrapper3.find("button").at(1);
    btn.find("button").simulate("click");
    // console.log(btn.find("button").debug());
    expect(wrapper3.find(BinarySearch).instance().state).toEqual({ upper:100,
      lower:0,
      max:100,
      isRunning:true});
  });

  it('CHECK YES',() =>{
    const wrapper3=mount(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
    const btn=wrapper3.find("button").at(1);
    btn.find("button").simulate("click");
    const btn1=wrapper3.find("button").at(2);
    btn1.find("button").simulate("click");
    console.log(btn1.find("button").debug());
    expect(wrapper3.find(BinarySearch).instance().state).toEqual({ upper:100,
      lower:51,
      max:100,
      isRunning:true});
    
  });
  it('CHECK NO',() =>{
    const wrapper3=mount(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
    const btn=wrapper3.find("button").at(1);
    btn.find("button").simulate("click");
    const btn1=wrapper3.find("button").at(3);
    btn1.find("button").simulate("click");
    console.log(btn1.find("button").debug());
    expect(wrapper3.find(BinarySearch).instance().state).toEqual({ upper:50,
      lower:0,
      max:100,
      isRunning:true});
    
  });
  it('CHECK UPPER VALUE',() =>{
    const wrapper3=mount(
      <MemoryRouter initialEntries={['/']}>
        <BinarySearch />
      </MemoryRouter>
    );
    let ep=wrapper3.find("EntryPoint").instance();
    let ourvalue=50;
    ep.getData({target: {value: ourvalue}});
    console.log(wrapper3.find(BinarySearch).instance().state);
  });
})

  
//});



