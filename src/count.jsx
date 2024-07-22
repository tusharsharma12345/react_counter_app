import './styles/count.css';
const Count = function (props){
    return (
    <>
    <h1>Update value between 0 and 20</h1>
    <h2>Current value is {props.current_value}</h2>
    </>
    );
}
export default Count