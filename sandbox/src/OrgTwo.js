import React from "react";

export default function OrgTwo() {
    return (
        <div>
        <h2>Organization Two</h2>
        <h3>This view is managed by a partnering company that owns a different Org Id.</h3>
        <p>For that reason, we have created a second instance of Alloy, and configurered it using the Org and Property Ids of Organization Two.</p>
        <p>Alloy instance is called: <i>organizationTwo</i></p>
        <pre>
            <code>
            {`
                organizationTwo("configure", {
                    propertyId: 8888888,
                    log: true
                });
            `}
            </code>
        </pre>
        <p>By going to the Network tab in your Developer Tools, you should see requests ending with <i>?propertyId=8888888</i></p>
        </div>
    );
}
