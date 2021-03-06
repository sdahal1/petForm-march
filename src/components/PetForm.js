import React, {useState} from 'react';


const PetForm = (props) => {
    const [petName, setPetName] = useState("")
    const [petAge, setPetAge] = useState("")
    const [petType, setPetType] = useState("")
    const [petBreed, setPetBreed] = useState("")


    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Welcome!</h1>
                <p className="lead">Please add newcoming pets here using this form</p>
            </div>
            <form className = "col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Pet Name</label>
                    <input className="form-control" type="text" name="petName" id="" onChange={(e)=>setPetName(e.target.value)}/>
                    {petName.length<3 && petName.length >0? <p className = 'text-danger'>Pet name must be at least 3 characters long</p>: null}
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Age</label>
                    <input className="form-control" type="number" name="petAge" id="" onChange={(e)=>setPetAge(e.target.value)}/>
                    {petAge <0 ? <p className = 'text-danger'>Pet must have a real age.</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Type</label>
                    <select className="custom-select" name = "petType" onChange= {(e)=>setPetType(e.target.value)}>
                        <option value = "" selected>Open this select menu</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                    </select>
                    {petType.length==0 ? <p className = 'text-danger'>Please select a pet type</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Breed</label>
                    <input className="form-control" type="text" name="petBreed" id="" onChange= {(e)=>setPetBreed(e.target.value)}/>
                    {petBreed.length<3 ? <p className = 'text-danger'>Pet breed must be at least 3 characters long</p>: null}
                </div>
                <button type="submit" className="btn btn-success">Add Pet</button>

            </form>

            <hr/>
            <p>Pet name: {petName}</p>
            <p>Pet Age: {petAge}</p>
            <p>Pet Type: {petType}</p>
            <p>Pet Breed: {petBreed}</p>
        </>
    );
};



export default PetForm;
