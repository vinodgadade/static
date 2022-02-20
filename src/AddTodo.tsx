import { Alert, AlertColor, Button, Snackbar, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface toDo {
    task: string,
    starred: boolean;
}

interface Props {
    list: toDo[]
    addTask: (task: string) => void
}


const AddTodo: React.FunctionComponent<Props> = (props) => {
    const { list, addTask } = props
    const [text, SetText] = useState('')
    const [snackbarState, toggleSnackbar] = useState<{ display: boolean, severity: AlertColor, message: string }>({ display: false, severity: 'info', message: '' });

    const verifyAndAdd = (text: string): void => {
        const isPresent = list.some((element) => element.task.trim().toLowerCase() === text.trim().toLowerCase());
        if (isPresent) {
            toggleSnackbar({ display: true, severity: 'error', message: 'To Do already present' })
        } else {
            addTask(text);
            toggleSnackbar({ display: true, severity: 'success', message: 'To Do added successfully' })
        }
    }

    const hanldeOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        SetText(e.target.value)
    }

    const handleClose = (): void => {
        toggleSnackbar({ display: false, severity: 'info', message: '' })
    }

    const handleKeyDown = (e: any): void => {
        if (e.keyCode === 13) {
            verifyAndAdd(text)
        }
    }

    return (<div className='add-todo'>
        <div className='add-todo-textfieled'>
            <Snackbar open={snackbarState.display} autoHideDuration={5000}>
                <Alert onClose={handleClose} severity={snackbarState.severity}>
                    {snackbarState.message}
                </Alert>
            </Snackbar>
            <TextField
                InputProps={{
                    placeholder: 'Press enter or add to do button to save',
                }}
                label={'Enter task to be added'}
                value={text}
                onKeyDown={handleKeyDown}
                onChange={hanldeOnChange}
                fullWidth>

            </TextField>
        </div>
        <div>
            <Button variant='outlined' disabled={!text} onClick={() => { verifyAndAdd(text) }}>Add To Do</Button>
        </div>
    </div>)
}

export default AddTodo;