function ClickAlert(){
    function handleClick(){
        alert('Button clicked! ZA waRUDO!')
    }

    return <button onClick={handleClick}> The click goes here</button>
}

export default ClickAlert;