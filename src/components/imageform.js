import React from "react";


const Imageform = ({Oninput, Onbutton}) => {
    return (
        <div className="tc pt4">
            <p className="white f3 b courier">{'To detect face in image, put URL of image below:'}</p>
            <div>
                <input className="f4 w-60" 
                       type={'text'} 
                       placeholder="Enter Image URL here" 
                       onChange={Oninput}/>
                <button className="v-mid f4 w-20 grow ml3 bg-lightest-blue b pointer"
                        onClick={Onbutton}> Detect </button>
            </div>    
        </div>
    );
}

export default Imageform;