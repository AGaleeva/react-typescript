import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useState, useEffect } from 'react';
import { Lesson25Wrapper, LoginForm, Text } from './styles';
import Input from 'components/input';
import Button from 'components/button';

function Lesson25() { 
  
  const schema = Yup.object().shape({
    // Создаем объект schema, в котором делаем валидацию наших полей в форме и передаем его в хук useFormik
    email: Yup.string().required('Email is required').email('Incorrect email format'),
    password: Yup.string().min(3, 'Minimal password length is 3 symbol').max(10, 'Maximal password length is 10 symbol').required('Password is required'),
  });
  
  // создаем объект formik, который включает в себя все необходимые функции и св-ва для управления данными из формы

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    validateOnChange: true,
    // validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
      actions.resetForm(); // при нажатии на кнопку форма очищается
      console.log('submit values now');
    },
  });

  console.log(formik);

  return (
    <Lesson25Wrapper>
      <LoginForm onSubmit={formik.handleSubmit}>
        <Text>Login form</Text>
        <Input
        // Передаем пропсу email компоненту Input, чтобы в нем отобразить ошибку
          error={formik.errors.email}
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          error={formik.errors.password}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          label="Password"
          placeholder="Enter your password"
        />
        <Button disabled={!formik.isValid || !formik.values.email || !formik.values.password} name="Login" type='submit' />
      </LoginForm>
    </Lesson25Wrapper>
  );
}

export default Lesson25;