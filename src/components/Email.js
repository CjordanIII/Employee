function Email(name){
    return(
        <div className = "employees-list-details-div">
            <div>
                <div className="description-sub-description-container">
                    <h3 className="description">Email</h3>
                    <p className="sub-description">{name.email}</p>
                </div>
            </div>
        </div>
            
    )
}

export default Email