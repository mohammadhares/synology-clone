
const SmallIcon = ({ icon , title , onClicked }) => {
    return ( 
        <span onClick={onClicked} className="icon" title={title}>
            <i className={`fa fa-${icon}`} ></i>
        </span>
     );
}
 
export default SmallIcon;