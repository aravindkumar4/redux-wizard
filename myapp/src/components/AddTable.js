import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import MyVerticallyCenteredModal from './UpdateList';
import { setSelectedTask, removeTaskFromList } from '../slices/tasksSlice';
const AddTable = () => {
    const [modalShow, setModalShow] = useState(false);
    const {tasksList} = useSelector((state) => state.tasks)
    const dispatch = useDispatch();
    const updateTask = (task) => {
        console.log('update Task')
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }
    const deleteTask = (task) => {
        console.log('delete Task');
        dispatch(removeTaskFromList(task))
    }
    return (
    <>
        <Table striped bordered hover>
            <thead>
                <tr className='text-center'>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {tasksList && (tasksList.map((task, index) => { return (
                <tr className='text-center' key={index + 1}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td> <Button variant="primary" className='mx-3' onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button> 
                     <Button variant="primary" onClick={()=> deleteTask(task)}><i className="bi bi-calendar-x-fill"></i></Button></td>
            </tr>
            )}
            ))
                
            }
            </tbody>
        </Table>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
    )
}
export default AddTable;