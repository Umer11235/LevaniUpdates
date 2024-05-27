import Icons from "@/components/header/customIcons";
import { ISearhBar } from "./interface";
import './style/style.css'

const SearchBar = (props: ISearhBar) => {
    return <div >
        <div className="search-bar-parent">
            <button className="btn btn-default" type="submit">
                <Icons icon="search" />
            </button>
            <input type="text" className="form-control sborder" placeholder={props.placeholder} />

        </div>
    </div>
}
export default SearchBar;