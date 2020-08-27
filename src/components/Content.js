import React from "react";
import Media from "react-bootstrap/Media";
import react from '../images/react.png'
import ModalWindow from "./ModalWindow";


const Content = () => {
    return (
        <>
            <Media>
                <img
                    width={300}
                    height={170}
                    className="mr-3 rounded-lg"
                    src={react}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Філософія React</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
            </Media>
            <ModalWindow/>
        </>
    )
}
export default Content;