



function Employeelistitem(name){

 

    return(
        <div className = "employeeslist">
            <img src={name.imgP} alt = {name.P}></img>
            <div className = 'name-job'>
                <p className = "name"> {name.nameP}</p>
                <p className ="job"> {name.jobP}</p>
            </div>
        </div>
            
    )
}

export default Employeelistitem