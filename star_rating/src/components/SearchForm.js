import React, { useState }from 'react';

function SearchForm({value, onSearch}) {
    const [data, setData] = useState("");

    function handleChange(e){
        e.preventDefault();
        setData(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onSearch(data);
        setData("");
    }

    return (
        <>
            <input 
                type="text" 
                defaultValue={value}
                value={data}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Search</button>
        </>
    );
}

export default SearchForm;