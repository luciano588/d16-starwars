import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";


export const Card = props => {
    const {store, actions} = useContext(context);\
    return (
        <div className="card" style={{ width: "18rem"}} >

    <img src={props.img} className="card-img-top"  alt=".."/>
    <div className="card-body">
    <h5 className="card-title">{props.title}}</h5>
    <Link to={btnUrl} className="btn btn-primary">{props.btnTitle}}</Link>
    </div>
    </div>
    );

};
Card.propTypes = {
    title: PropTypes.string,
    btnUrl: PropTypes.string,
    btnTitle: PropTypes.string,
    img: PropTypes.string,
    


};

// export const card = () =>{
//     return (<div className="card" style="width: 18rem;">
//   <img src={Props.img} className="card-img-top" alt="...">
//   <div className="card-body">
//     <h5 className="card-title">Card title</h5>
//     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" className="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// )
// };
