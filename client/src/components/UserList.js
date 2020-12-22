import {
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    EmailField,
    List,
    TextField
} from 'react-admin'

import React from 'react'

const UserList = (props) =>{
    return<List {...props}>
        <Datagrid>
            <TextField source='id'/>
            <TextField source='name'/>
            <EmailField source='email'/>
            <DateField source='publishedAt'/>
            <EditButton basePath='/users'/>
            <DeleteButton basePath='/users'/>
        </Datagrid>
        </List>
}
export default UserList