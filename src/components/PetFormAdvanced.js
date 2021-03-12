import React, {useState} from 'react';


const PetFormAdvanced = (props) => {
    // const [petName, setPetName] = useState("")
    // const [petAge, setPetAge] = useState("")
    // const [petType, setPetType] = useState("")
    // const [petBreed, setPetBreed] = useState("")
    const [formInfo, setFormInfo] = useState({
        petName: "",
        petAge: "",
        petType:"",
        petBreed: ""
    })

    const changeHandler = (e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Welcome!</h1>
                <p className="lead">Please add newcoming pets here using this form</p>
            </div>
            <form className = "col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor="">Pet Name</label>
                    <input className="form-control" type="text" name="petName" id="" onChange={changeHandler}/>
                    {formInfo.petName.length<3 && formInfo.petName.length >0? <p className = 'text-danger'>Pet name must be at least 3 characters long</p>: null}
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Age</label>
                    <input className="form-control" type="number" name="petAge" id="" onChange={changeHandler}/>
                    {formInfo.petAge <0 ? <p className = 'text-danger'>Pet must have a real age.</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Type</label>
                    <select className="custom-select" name = "petType" onChange= {changeHandler}>
                        <option value = "" selected>Open this select menu</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                    </select>
                    {formInfo.petType.length==0 ? <p className = 'text-danger'>Please select a pet type</p>: null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Breed</label>
                    <input className="form-control" type="text" name="petBreed" id="" onChange= {changeHandler}/>
                    {formInfo.petBreed.length<3 ? <p className = 'text-danger'>Pet breed must be at least 3 characters long</p>: null}
                </div>
                <button type="submit" className="btn btn-success">Add Pet</button>

            </form>

            <hr/>
            <p>Pet name: {formInfo.petName}</p>
            <p>Pet Age: {formInfo.petAge}</p>
            <p>Pet Type: {formInfo.petType}</p>
            <p>Pet Breed: {formInfo.petBreed}</p>
        </>
    );
};



export default PetFormAdvanced;
