import React from "react";
import useRestroCards from "../utility/useRestroCards";
import Card from "../utility/Card";

const Body = () => {
    const restroData = useRestroCards();
    if (restroData === null) {
        return <div>Loading ...</div>
    }
    return (
        <>
            <div className="flex flex-wrap">
                {restroData.map((item) => (
                    <div className="border w-44 m-2 p-2 bg-slate-50 hover:border-x-gray-500 cursor-pointer">
                        {item.title}
                    </div>
                    // <Card key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}
export default Body;