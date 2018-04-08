import React, {Component} from 'react';
function HOC(Component, props, functions){
    return class extends React.Component {

        render(){
            return (
              <Component {...props} {...functions} />
            )
        }
    }
}

export const HOC1 = (Component, props, functions)=>{
    return <Component {...props} {...functions} />
}
export default HOC