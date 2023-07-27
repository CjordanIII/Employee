import Employeelistitem from "./EmployeeListitem"
import Images from "./images"
const data = Images()


function Employeelist(){
    return(
        <>
            <Employeelistitem nameP= {data[0].name} imgP= {data[0].img} jobP= {data[0].job}></Employeelistitem>
            <Employeelistitem nameP= {data[1].name} imgP= {data[1].img} jobP= {data[1].job}></Employeelistitem>
            <Employeelistitem nameP= {data[2].name} imgP= {data[2].img} jobP= {data[2].job}></Employeelistitem>
            <Employeelistitem nameP= {data[3].name} imgP= {data[3].img} jobP= {data[3].job}></Employeelistitem>
            <Employeelistitem nameP= {data[4].name} imgP= {data[4].img} jobP= {data[4].job}></Employeelistitem>
            <Employeelistitem nameP= {data[5].name} imgP= {data[5].img} jobP= {data[5].job}></Employeelistitem>

        </>
    )


}

export default Employeelist