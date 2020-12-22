import {
    Create,
    SimpleForm,
    TextInput
} from 'react-admin'

import React from 'react'

const UserCreate = (props) => {
    return(
       <Create title='Create a User' {...props}>
           <SimpleForm>
               <TextInput source='name'/>
               <TextInput multiline source='email'/>
           </SimpleForm>
       </Create>
    )
}
export default UserCreate
