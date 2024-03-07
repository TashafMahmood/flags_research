// import React from 'react'
// import { flags } from '../../data'

// const Main = () => {
//     const text = 'hey this is in ag format'
//     return (
//         <div>
//             <h1>This is flag page</h1>
//             {
//                 flags?.map((flag, id) => (
//                     <p>
//                         {text == flag.name ?
//                             <><img src={flag.flag} alt="" /></> : <>{text}</>}</p>
//                 ))
//             }
//         </div>
//     )
// }

// export default Main

import React, { useState } from 'react';
import { flags } from '../../data';

const Main = () => {
    const [inputText, setInputText] = useState('')
    // const inputText = 'hello get in ag for ad --- bb independent';
    const words = inputText.toLowerCase().split(' ');

    const getCodeFlag = (code) => {
        const matchingFlag = flags.find(flag => flag.name === code);
        return matchingFlag ? <img key={code} src={matchingFlag.flag} alt="" width={24} /> : code;
    };



    return (
        <div style={{ padding: 20 }}>
            <div>
                <h1>AVAILABLE FLAGS WITH CODE</h1>
                {flags?.map((item, id) => (
                    <span style={{ fontSize: 22 }}>{item.name.toUpperCase()} : <img src={item.flag} alt="" width={22} />{"  "}</span>
                ))}
            </div>

            <br />
            <br />
            <input type="text" onChange={e => setInputText(e.target.value)}
                placeholder='enter your comments here...'
                style={{ marginBottom: 20, padding: 10, width: '50%' }} /><br />
            {words.map((word, index) => (
                <React.Fragment key={index}>
                    {index > 0 && ' '} {/* Add space between words */}
                    {getCodeFlag(word)}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Main;
