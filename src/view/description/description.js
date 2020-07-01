import React from 'react';
import './description.css';

class Description extends React.Component {

    render() {


        return (
            <div>
                <div className="description_header">
                    who are we?
                </div>
                <div className="description_info">
                    we are a team of creativity diverse, driven and innovate individuals working to achieve the best we can.
                </div>
                <div className="description_header">
                    Our mission
                </div>
                <div className="description_info">
                    we want to give our clients the best and help their businesses succeed. Together we can make you inspire to growth to even ,ore than where you are today.
                </div>

            </div>
        )
    }
}

export default Description;