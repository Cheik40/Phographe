export default function OptionProject(props) {
    return (
        <label>
            {props.label}
            <select name={props.name}>
                <option value={props.projet1}>{props.projet1}</option>
                <option value={props.projet2}>{props.projet1}</option>
                <option value={props.projet3}>{props.projet1}</option>
            </select>
        </label>
    );
}
