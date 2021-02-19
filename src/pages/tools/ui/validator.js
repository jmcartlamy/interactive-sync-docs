import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Sandbox() {
    return (
        <Layout
            title="UI Validator"
            description="UI Validator use the same validation schemas as our EBS to verify if a JSON sent is valid or invalid. A response sent you with the errors if any."
        >
            <main>
                <div className="container margin-vert--xl">
                    <div class="row">
                        <div class="col col--6 col--offset-3">
                            <h1 class="hero__title">🚧 In development 🚧</h1>
                            <p>UI Validator tool is currently in development.</p>
                            <p>Links that might interest you:</p>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to={useBaseUrl('docs')}>What is Interactive Sync?</Link>
                                </li>
                                <li>
                                    <Link to={useBaseUrl('docs/getting-started/prerequisites')}>
                                        Get Started
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Sandbox;
