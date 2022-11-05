import React from "react";
import world from '../images/world.png'

export default function Modal(props) {

    const handleClick = () => {
        props.SetModalIsActive(false)
    }

    if (props.modalIsActive) {
        return (
            <div className="modal-container">
                <div className="add-destination">
                    <div className="modal-nav">
                        <h1 className='modal-heading'>Add a new destination</h1>
                        <span className="close" onClick={handleClick}>x</span>
                    </div>
                    <form method="dialog">
                        <p>
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="e.g. Stonehenge" />
                            <label for="country">Country</label>
                            <input type="text" id="country" placeholder="e.g. UK" />
                            <label for="maps">Google Maps URL </label>
                            <input type="url" id="maps" placeholder="e.g. https://goo.gl/maps/Lc9MUeUVAoBqnb3g9" />
                            <div className="date-range">
                                <div>
                                    <label for="from">Arrived</label>
                                    <input type="date" />
                                </div>
                                <div>
                                    <label for="to">Departed</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <label for="desc">Description</label>
                            <textarea id="desc" placeholder="e.g. Legendary neolithic monument made using stones transported from Wales and built for unknown purpose." />
                            <label for="image">Image URL</label>
                            <input type="url" id="image" placeholder="e.g https://unsplash.com/photos/oQ9pECond48" />
                        </p>


                        <button className="submit" value="default">Submit</button>

                    </form>
                </div>
            </div>
        )
    }
};