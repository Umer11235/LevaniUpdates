import { IOrderDetailHeading } from "./interface"
import './style/style.css'
const TableHeading = (props: IOrderDetailHeading) => {
    return <div className="order-detail-heading-main">
        <h4><span>{props.qty}x</span> {props.label}</h4>
    </div>
}

export default TableHeading;