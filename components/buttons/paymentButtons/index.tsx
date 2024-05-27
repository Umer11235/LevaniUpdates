import Icons from "@/components/header/customIcons"
import './style/style.css'
import { IPrimaryButton } from "./interface";
const PaymentButton = (props: IPrimaryButton) => {
    return <button className="btn btn-outline-primary w-100 my-3 button-payment">
        <span>
            <Icons icon={props.icon} />
            <span className="btn-pay-title">{props.title}</span>
        </span>
        <span >
            {
                props.rightIcon && props.showRight && props.rightIcon1 && props.showRight === true ?
                    <span>
                        <span className="mx-3"><Icons icon={props.rightIcon} /></span>
                        <Icons icon={props.rightIcon1} />
                    </span>
                    : <></>
            }
        </span>
    </button>
}

export default PaymentButton;