import React from "react";
import {Route} from "react-router-dom"
import LocationLayout from "../Layouts/Location.layout";

const LocationHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route {...rest} component={(props) => (
                <LocationLayout>
                    <Component {...props} />
                </LocationLayout>
            )} />
        </>
    )
}

export default LocationHOC;