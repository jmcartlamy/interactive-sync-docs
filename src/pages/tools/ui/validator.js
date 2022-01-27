import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Sandbox() {
    return (
        <Layout
            title="UI Validator"
            description="UI Validator use the same validation schemas as the EBS to verify if a JSON sent is valid or invalid. A response sent you with the errors if any."
        >
            <main>
                <div className="container margin-vert--xl">
                    <div className="row">
                        <div className="col col--12">
                            <h1 className="hero__title">UI Validator</h1>
                            <BrowserOnly
                                fallback={<div>UI Validator is only available on client side.</div>}
                            >
                                {() => {
                                    const Validator = require('../../../components/Validator/Validator')
                                        .default;
                                    return <Validator />;
                                }}
                            </BrowserOnly>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Sandbox;
