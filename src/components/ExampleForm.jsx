import React, {useState} from "react";

const ExampleForm = ({data}) => {
	
	// const [textInput, setTextInput] = useState('');
	// const [textAreaInput, setTextAreaInput] = useState('');
	const [formData, setFormData] = useState({
		text: '',
		textarea: '',
	});
	
	function handleSubmit(e) {
		e.preventDefault();
	}
	
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value})
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={formData.text} onChange={handleInputChange} name='text'/>
			</label>
			
			<textarea value={formData.textarea} onChange={handleInputChange} name="textArea"/>
			
			<button type={"submit"}>Submit</button>
		</form>
	);
}

export default ExampleForm;