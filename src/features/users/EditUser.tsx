import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import {editUser} from './userSlice';

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store: any) => store.users);
  const navigate = useNavigate();
  const existingUsers = users.filter((user: any) => user.id === params.id);
  const {name, email} = existingUsers[0];
  const [values, setValues] = useState({
    name: name,
    email: email
  });
  const handleEditUser = () => {
    setValues({name: '', email: ''});
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email
      })
    );
    navigate('/');
  };
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField
        label='Name'
        value={values.name}
        onChange={(e: any) => setValues({...values, name: e.target.value})}
        inputProps={{
          type: 'text',
          placeholder: 'John Doe'
        }}
      />
      <br />
      <TextField
        label='Email'
        value={values.email}
        onChange={(e: any) => setValues({...values, email: e.target.value})}
        inputProps={{
          type: 'email',
          placeholder: 'Johndoe@gmail.com'
        }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
