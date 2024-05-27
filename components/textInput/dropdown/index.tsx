import './style/style.css'


function DropdownMenu(props:dropdown) {
    return ( 
<div className="Menudropdown">


<select className="form-select selectCss" aria-label="Default select example">
<option selected>{props.selected}</option>
<option value="1">{props.option}</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>

</div>


     );
}

export default DropdownMenu;