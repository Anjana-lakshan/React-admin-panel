import {DateInput, Edit, SimpleForm, TextInput} from 'react-admin'

import React from 'react'

const PostEdit = (props) => {
    return(
       <Edit title='Edit Post' {...props}>
           <SimpleForm>
                <TextInput disabled source='id'/>
               <TextInput source='title'/>
               <TextInput multiline source='body'/>
               <DateInput label='Published' source='publishedAt'/>
           </SimpleForm>
       </Edit>
    )
}
export default PostEdit
