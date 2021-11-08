import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./components/Home";
import Bar from "./components/Pokedetail";
import store from "./store/index";

configure({ adapter: new Adapter() });
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe("El componente Home debe renderizarse solo en la ruta /", () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
    });
  });
});

describe("El componente Bar debe renderizarse solo en la ruta /pokemons", () => {
  it('Debería renderizarse en la ruta "/pokemons"', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/pokemons"]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(Bar)).toHaveLength(1);
  });
});
