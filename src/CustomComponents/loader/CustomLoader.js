import React from 'react';
import './customLoader.css'
import { Oval, Triangle, Vortex, TailSpin } from 'react-loader-spinner';

const CustomLoader = ({ loading }) => {
    return (
        loading &&
        <div>
            <div id="loader-myModal" className="loader-modal">
                <div className="loader-modal-content">
                    {/* <Vortex
                        height={250}
                        width={250}
                        color="#8380ba"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#8380ba"
                        strokeWidth={5}
                        strokeWidthSecondary={5}
                    // colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    /> */}
                    <TailSpin   // Type of spinner
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>

            </div>
        </div>
    )
}

export default CustomLoader
