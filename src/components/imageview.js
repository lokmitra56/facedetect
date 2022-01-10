import React from "react";
import './imageview.css';

const Imageview = ({imageURL, box}) => {
    return (
        <div className="center mb3">
        <div className="absolute mt4">
            <img id="facebox" alt={"pic"} src={imageURL} width={'600px'} height={'auto'}/>
            <div className="bounding-box" style={{top:box.top_row, 
                                                  bottom:box.bottom_row,
                                                  right: box.right_col,
                                                  left: box.left_col }}>
            </div>
        </div>
        </div>
    );
}

export default Imageview;