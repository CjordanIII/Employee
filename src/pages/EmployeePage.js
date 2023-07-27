import EmployeeHeader from "../components/EmployeePageHead"
import Employeelistitem from "../components/EmployeeListitem"
import Images from "../components/images"
import Employeeitemdetails from "../components/EmployeeItemdetails"
import Moblenum from "../components/Moblenum"
import Sms from "../components/Sms"
import Email from "../components/Email"
const data = Images()

function EmployeePage(){
    return(
        <>
            <EmployeeHeader></EmployeeHeader>
            <div className = "Emplayeepage-list-item">
                <Employeelistitem nameP= {data[0].name} imgP= {data[0].img} jobP= {data[0].job}></Employeelistitem>
                <Employeeitemdetails phone = {data[0].office} ></Employeeitemdetails>
                <Moblenum moble = {data[0].moble} ></Moblenum>
                <Sms sms ={data[0].sms}></Sms>
                <Email email ={data[0].email}></Email>
            </div>
            
        </>

    )
    
}

export default EmployeePage