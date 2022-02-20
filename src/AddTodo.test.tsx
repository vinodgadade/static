import AddTodo from './AddTodo';
import { render } from '@testing-library/react';

describe('todd Component', () => {
    const list = [{
        "task": "Feed Dog",
        "starred": true
    },
    {
        "task": "Call Parents",
        "starred": false
    }];

    test('renders textfield and button', async () => {
        const component = render(<AddTodo list={list} addTask={jest.fn()} />);
        const textfield = await component.findByRole('textbox');
        textfield.setAttribute('value', 'abcd');
        const placeholder = textfield.getAttribute('placeholder');
        expect(placeholder).toBe('Press enter or add to do button to save');
        expect(textfield.getAttribute('value')).toBe('abcd');
        const button = await component.findByRole('button');
        expect(button.getAttribute('type')).toBe('button');
    });
});