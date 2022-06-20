import { findByLabelText } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const EditUserForm = (props) => {

    const editForm = {
        display: 'flex',
        flexDirection: 'column'
    }

    const CancelButton = styled.button`
    background-color: lightcoral
`

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () =>{
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = (event) => {

        const {name, value} = event.target

        setUser({...user, [name]:value})
    }
    return (
        <form 
        style={editForm}
        onSubmit={
        (event) => {
            event.preventDefault()

                props.updateUser(user.id, user)                
            }
        }>
            
            <label>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do usuário" />

            <label>Nome de Usuário</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Nickname do usuário" />

            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email do usuário" />
            
            <button style={{"background-color": "lightgreen"}}>Atualizar</button>

            <CancelButton onClick={
                () => {
                    props.setEditing(false)
                }
            }>
                Cancelar
            </CancelButton>
        </form>
    )

}

export default EditUserForm