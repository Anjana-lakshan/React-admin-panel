import {
    Edit,
    SimpleForm,
    TextInput
} from 'react-admin'

import React from 'react'

const UserEdit = (props) => {
    return(
       <Edit title='Edit User' {...props}>
           <SimpleForm>
                <TextInput disabled source='id'/>
               <TextInput source='name'/>
               <TextInput multiline source='email'/>
           </SimpleForm>
       </Edit>
    )
}
export default UserEdit
