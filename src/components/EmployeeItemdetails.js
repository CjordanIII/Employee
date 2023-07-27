




function Employeeitemdetails(name){
    return(
        <div className = "employees-list-details-div">
            <div>
                <div className="description-sub-description-container">
                    <h3 className="description">Call Office</h3>
                    <p className="sub-description">{name.phone}</p>
                </div>

            </div>
        </div>
            
    )
}

export default Employeeitemdetails