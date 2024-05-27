import { ITableHeading } from "./interface"
import './style/style.css'
const TableHeading=(props:ITableHeading)=>{
    return <div className="heading-table-main">
         <h4>{props.title}</h4>
         <h4 className="strong">{props.value}</h4> 
    </div>
}

export default TableHeading;