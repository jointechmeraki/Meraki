import React from 'react';
import ReactLoading from 'react-loading';
import { Center } from './Style';

export default function Loading(props) {
    const myStyle = {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
    }; 

    if (props.center)
    {
        myStyle.width = "100%";
    }

    return (
        <>
            <div style={myStyle}>
                <Center>
                    <ReactLoading 
                        type={props.type || 'spin'} 
                        color="#6E72B7" 
                        height={props.height || 17} 
                        width={props.width || 17} />
                </Center>
            </div>
        </>
    );
}