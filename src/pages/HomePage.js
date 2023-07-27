import Header from "../components/Header";
import Searchbar from "../components/Searchbar"
import Employeelist from "../components/EmployeeList";
function Homepage(){
    return(
        <>
            <Header></Header>
            <Searchbar></Searchbar>
            <Employeelist></Employeelist>

        </>

    )
}

export default Homepage
