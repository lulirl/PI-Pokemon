import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter, NavLink } from "react-router-dom";

import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import Bar from "./components/Pokedetail";

configure({ adapter: new Adapter() });
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("Home", () => {
  // describe("El componente Home debe existir ", () => {
  //   it('Debe existir un componente Home"', () => {
  //     const wrapper = shallow(<Home />);
  //     expect(wrapper.find(Home)).toHaveLength(1);
  //   });
  // });

  describe("El componente Home debe tener un link a /pokemons", () => {
    it('Debería tener un link a "/pokemons"', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.find(NavLink).at(0).prop("to")).toEqual("/pokemons");
    });
    it("Renderiza la imagen Pikachu_Female.gif", () => {
      const wrapper = shallow(<Home />);
      expect(wrapper.find("img").at(0).prop("src")).toEqual(
        "Pikachu_Female.gif"
      );
    });
  });
});
