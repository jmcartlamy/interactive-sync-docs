import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Sandbox() {
    return (
        <Layout
            title="UI Sandbox"
            description="UI Sandbox allow to try out and preview what is rendered with a JSON. It uses the same components as our front extension."
        >
            <main>
                <div className="container margin-vert--xl">
                    <div className="row">
                        <div className="col col--6 col--offset-3">
                            <h1 className="hero__title">🚧 In development 🚧</h1>
                            <p>UI Sandbox tool is currently in development.</p>
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
