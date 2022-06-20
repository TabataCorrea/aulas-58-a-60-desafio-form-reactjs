import React, {useState} from 'react';
import styled from 'styled-components';
import styles from './styles.module.css';

const addButton = {
    backgroundColor: 'lightgreen'
}  


const AddUserForm = (props) => {
    
    
    const initForm = {id: null, name: null, username: null, email: null}
    const [user, setUser] = useState(initForm)
    
    const handleInputChange = (event) => {

        const {name, value} = event.target

        setUser({...user, [name]:value})

    }

    return (
        <form
        style={{  
            display: "flex",
            flexDirection: "column"
        }}
         onSubmit={
            (event) =>{

                event.preventDefault()

                if (!user.name || !user.username || !user.email) {
                    return
                }

                props.addUser(user)
                setUser(initForm)

            }
        }>
            
            <label className={styles.label}>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Usuário" />
            
            <label className={styles.label}>Nome de Usuário</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Apelido" />
            
            <label className={styles.label}>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email" />

            <button style={addButton}>Registrar</button>


        </form>
    )

}

export default AddUserForm