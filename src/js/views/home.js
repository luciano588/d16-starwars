import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../store/card";

export const Home = () => {
    const {store, actions} = useContext(context);
    
    const buildRow = (data,type) => {
        return data.map((item, index)=>{
            return <Card 
                    img={"https://via.placeholder.com/300"}
                    key={index}
                    title={item.name}
                    btnURL={`/${type}/${index}`} 
                    btnTitle="View more" />
        );
    });

    return (
	<div className="text-center mt-5">
		<h1>Star Wars Blog!</h1>
		<div className="resource-row">{buildRow(store.planets, "planets")}</div>
		<div className="row">{buildRow(store.people, "people")}</div>
        <div className="row">{buildRow(store.vehicles, "vehicles")}</div>     
    </div>
    );
};
