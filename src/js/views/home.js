import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
    const {store, actions} = useContext(context);
    const buildRow = (data) => data.map((item, index)=>{
return  <Card
key={index}
            img={""}
            title={item.name}
            description={}

/>

    })
    return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div className="row">{buildRow.</div>
        <p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>)
};
