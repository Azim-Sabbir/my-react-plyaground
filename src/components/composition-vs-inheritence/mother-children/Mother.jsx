import React from "react";

const Mother = ({children}) => {
    console.log(children)
    return (
        <>
            <div className={'FancyBorder FancyBorder-'}>
                {
                    children.map((child) => {
                        return child;
                    })
                }
                {children.firstChildren}
            </div>
        </>
    );
}
export default Mother;