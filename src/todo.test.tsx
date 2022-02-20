import ToDo from './todo';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('todd Component', () => {
    const list = [{
        "task": "Feed Dog",
        "starred": true
    },
    {
        "task": "Call Parents",
        "starred": false
    }];

    test('renders table with all rows', async () => {
        const component = render(<ToDo list={list} starClicked={jest.fn()} deleteClicked={jest.fn()} searched={false} />);
        const table = await component.findByRole('table');
        expect(table.getElementsByTagName('tr').length).toBe(2);
        if(table.getElementsByTagName('tr').item(1)) {
            const text1 = table.getElementsByTagName('tr').item(1)
            text1 && expect(text1.textContent).toBe('Call Parents');
        }
    });
});