import { useState } from 'react';

const useRegister = () => {
    const [formData, setFormData] = useState({
        name: 'Jersson',
        lastName: '',
        email: '',
        password: '',
        country: 0,
    });

    const [confirmPass, setConfirmPassword] = useState('');
    const [msgError, setMsgError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ( name === 'confirmPass') {
        setConfirmPassword(value)
    }
    else {
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    }
    console.log(confirmPass);
    console.log(formData.password);
    if ( confirmPass !== formData.password ) {
        setMsgError('Las contrasenas no coinciden') 
    }else{
      setMsgError('')
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar cualquier lógica adicional, como enviar datos al servidor
    console.log(formData);
    // También podrías realizar validaciones aquí antes de enviar los datos
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    confirmPass,
    msgError
  };
};

export default useRegister;
