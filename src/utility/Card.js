import React from "react";

const Card = (item) => {
    console.log(item)
    return (
        <div className="border w-44 m-2 p-2 bg-slate-50 hover:border-x-gray-500 cursor-pointer">
            {item.title}
        </div>
    )
}

export default Card;