import React from 'react'

function Form(props) {
    const { formValues, change, submit } = props;
    return (
        <div className="form__container">
            <label htmlFor="form">Team Member Form:
                <form onSubmit={submit} className="form">
                    <label htmlFor="name" className="form__element">Name: 
                        <input 
                            type="text" 
                            name="name"
                            value={formValues.name}
                            onChange={change}
                            placeholder="Type your Name"
                        ></input>
                    </label>
                    <label htmlFor="email" className="form__element">Email: 
                        <input 
                            type="email" 
                            name="email"
                            value={formValues.email}
                            onChange={change}
                            placeholder="Type your Email"
                        ></input>
                    </label>
                    <label htmlFor="role" className="form__element">Role:  
                        <select name="role" value={formValues.role} onChange={change}>
                            <option value="">--- Select Your Role ---</option>
                            <option value="Backend">Backend Engineer</option>
                            <option value="Frontend">Frontend Engineer</option>
                            <option value="Designer">Designer</option>
                        </select>
                    </label>
                    <button className="form__button">Submit</button>
                </form>
            </label>
        </div>
    )
}

export default Form
