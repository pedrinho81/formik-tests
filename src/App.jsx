import { useState } from 'react'
import { Formik, Field } from 'formik'
import './App.css'

function App() {  

  function onSubmit(values, actions) {
    
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: ""
        }}
        render={({ values }) => (
          <form>
            <label htmlFor="email">email: </label> 
            <Field type="email" name='email'></Field> {values.email}
            <label htmlFor="email">password: </label> 
            <Field type="password" name='password'></Field> {values.password}
            <button type="submit">Enviar</button>
          </form>
        )}
        >
          
          

        </Formik>
    </div>
  )
}

export default App
