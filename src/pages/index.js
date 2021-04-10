import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const features = [
    {
        title: 'A Twitch extension',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Twitch extensions are interactive overlays or panels where twitch community can
                interact with the streamer.
            </>
        ),
    },
    {
        title: 'Promotes interactions',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Tell the extension what you want for your application at any time, see twitch
                community receives the components displayed, and get messages at every interaction.
            </>
        ),
    },
    {
        title: 'Creates interactive applications',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Create a new generation of application promoting interactions whose usage or
                gameplay could depends entirely on the actions of the viewers.
            </>
        ),
    },
    {
        title: 'Secure websocket connection',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Let your user connects with Twitch and establish a secure websocket connection with
                our Extension Backend Service (EBS).
            </>
        ),
    },
    {
        title: 'Send messages in JSON',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Send user interface in JavaScript Object Notation (JSON), and use all available
                components or events in the extension.
            </>
        ),
    },
    {
        title: 'Strengheted REST APIs',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Receive a double protection for viewers who interact with what you render, to
                prevent bot abuse, spam or cheating.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="Customizable extension, promoting interactions between Twitch community and any application"
            description="Tell the extension what you want at any time, see twitch community receives your components displayed, and get messages at every interaction."
        >
            <header className={clsx('hero hero--dark', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--primary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/getting-started/prerequisites')}
                        >
                            Get Started
                        </Link>
                        <a
                            className={clsx(
                                'button button--info button--lg',
                                styles.demo
                            )}
                            href="https://jmcartlamy.github.io/phaser3-bta-tpe/"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
