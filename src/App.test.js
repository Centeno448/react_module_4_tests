import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
import TareasLista from './TareasLista';

beforeAll(() => {
  configure({ adapter: new Adapter() });
});

test('App.js tiene 1 componente hijo TareasLista.js | Asegúrate de renderizar 1 vez el componente <TareasLista> dentro de App.js', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TareasLista).length).toBe(1);
});

test('App.js tiene 1 <input type="text"> | Asegúrate de renderizar 1 vez un <input type="text" /> dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const input = wrapper.find('input[type="text"]');
  expect(input).toBeDefined();
  expect(input.length).toBe(1);
});

test('App.js tiene 2 botones con texto | Asegúrate de renderizar 2 botones con texto dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const buttons = wrapper.find('button');
  expect(buttons).toBeDefined();
  expect(buttons.length).toBe(2);
  expect(buttons.at(0).text().trim()).not.toBe('');
  expect(buttons.at(1).text().trim()).not.toBe('');
});

test('App.js tiene 1 div con texto | Asegúrate de renderizar 1 div con texto dentro de App.js', () => {
  const wrapper = shallow(<App />);
  const div = wrapper.find('div');
  expect(div).toBeDefined();
  expect(div.length).toBe(1);
  expect(div.first().text().trim()).not.toBe('');
});

test('App.js utiliza el hook useState | Asegúrate de utilizar el hook useState con la variable "tareas", setter "setTareas" y estado inicial [] dentro de App.js', () => {
  const appDefinition = App.toString();

  expect(appDefinition).toContain(
    'const [tareas, setTareas] = (0, _react.useState)([]);'
  );
});

test('App.js manda el prop "tareas" a TareasLista | Asegúrate de que App.js mande el prop "tareas" al componente TareasLista', () => {
  const wrapper = shallow(<App />);
  const tareasLista = wrapper.find(TareasLista);
  expect(tareasLista.prop('tareas')).toBeDefined();
  expect(tareasLista.prop('tareas').length).toBe(0);
});
