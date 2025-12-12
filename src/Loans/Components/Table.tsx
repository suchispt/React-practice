
import data from "../Api/CustomerData.json"


const TableComponent = () => {
    const value = data;
    return (
        <>
            {value.map((val, index) => (
                <p key={index}>{JSON.stringify(val)}</p>
            ))}
        </>
    )

}



export default TableComponent