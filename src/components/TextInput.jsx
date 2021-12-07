const TextInput = (props) => {
    return (
        <div>
            <input type="text" name="name" id="name" value={props.textName} onChange={props.onChangeText}/>
            <button onClick={props.onSubmit}>Submit</button>
        </div>
    )
}

export default TextInput