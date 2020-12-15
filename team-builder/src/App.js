import React, { useState } from 'react';
import './App.css';
import Form from "./Form";
import TeamMember from './TeamMember';

const defaultValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [savedFormInfo, setSavedFormInfo] = useState([]);

  const changes = evt => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value})
  }

  const submit = evt => {
    evt.preventDefault();
    const newData = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setSavedFormInfo([ ...savedFormInfo, newData]);
    setFormValues(defaultValues);
  };

  return (
    <div className="app">
      <Form 
      formValues={formValues} 
      change={changes} 
      submit={submit}
      />
      <div className='something'>
        {savedFormInfo.map((member) => {
          return <div className="teamMember__container">
                    <TeamMember 
                      className="team__member" 
                      key={member.name} 
                      details={member} 
                    />
                  </div>
        })}
      </div>
    </div>
  );
}

export default App;
