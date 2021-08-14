import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import styles from './index.module.css';

const steps = [
    {
        title: '1. Establish a WSS connection',
        imageLightUrl: 'img/websocket_logo.svg',
        imageDarkUrl: 'img/websocket_logo.svg',
    },
    {
        title: '2. Send your components',
        imageLightUrl: 'img/json_logo_light.png',
        imageDarkUrl: 'img/json_logo_dark.png',
    },
    {
        title: '3. Receive more interactions',
        imageLightUrl: 'img/twitch_logo.svg',
        imageDarkUrl: 'img/twitch_logo.svg',
    },
];

const features = [
    {
        title: 'A Twitch extension',
        imageUrl: 'img/extension_type_twitch.png',
        styleName: 'extensionTypeTwitch',
        description: (
            <>
                Twitch extensions are interactive overlays or panels where twitch community can
                interact with the streamer.
            </>
        ),
    },
    {
        title: 'Promotes interactions',
        imageUrl: 'img/promote_interactions_ui.png',
        description: (
            <>
                Tell the extension what you want for your application at any time, see twitch
                community receives the components displayed, and get messages at every interaction.
            </>
        ),
    },
    {
        title: 'Creates interactive applications',
        imageUrl: 'img/animation_interactive_app_example.webp',
        backgroundUrl: 'img/bg_shape_animation_2.png',
        styleName: 'animationAppEx',
        description: (
            <>
                Create a new generation of application promoting interactions whose usage or
                gameplay could depends entirely on the actions of the viewers.
            </>
        ),
    },
    {
        title: 'Easy to use',
        imageUrl: 'img/animation_websocket_example_app.webp',
        styleName: 'animationWSSEx',
        description: (
            <>
                Only a registered app on Twitch and a WebSocket connection are required to send
                "User Interface" and to receive messages.
                <br />
                The extension takes care of the rest.
                <Link
                    className={clsx('button button--primary', styles.getStarted)}
                    to={'docs/getting-started/prerequisites'}
                >
                    Get Started
                </Link>
            </>
        ),
    },
];

function Step({ imageLightUrl, imageDarkUrl, title, description }) {
    const imgLightUrl = useBaseUrl(imageLightUrl);
    const imgDarkUrl = useBaseUrl(imageDarkUrl);
    return (
        <div className="col col--4">
            {imgLightUrl && imgDarkUrl && (
                <div className="text--center">
                    <ThemedImage
                        alt={title}
                        className={styles.stepImage}
                        sources={{
                            light: imgLightUrl,
                            dark: imgDarkUrl,
                        }}
                    />
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            {description && <p>{description}</p>}
        </div>
    );
}

function Feature({ imageUrl, backgroundUrl, title, description, styleName }) {
    const imgUrl = useBaseUrl(imageUrl);
    const bgUrl = useBaseUrl(backgroundUrl);

    return (
        <div className={clsx('row', styles.featureRow)}>
            <div className={clsx('col col--6', styles.posRelative)}>
                {imgUrl && (
                    <img
                        className={clsx(styles.featureImage, styles[styleName])}
                        src={imgUrl}
                        alt={title}
                    />
                )}
                {bgUrl && <img className={styles.featureImage} src={bgUrl} alt={title} />}
            </div>
            <div className="col col--6">
                <h2>{title}</h2>
                {description && <p className={styles.featureDescription}>{description}</p>}
            </div>
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
                            className={clsx('button button--primary button--lg', styles.getStarted)}
                            to={useBaseUrl('docs/#components')}
                        >
                            Explore
                        </Link>
                        <a
                            className={clsx('button button--info button--lg', styles.demo)}
                            href="https://jmcartlamy.github.io/phaser3-bta-tpe/"
                        >
                            Demo
                        </a>
                    </div>
                </div>
            </header>
            <main>
                {steps && steps.length > 0 && (
                    <section className={styles.steps}>
                        <div className="container">
                            <div className="row">
                                {steps.map((props, idx) => (
                                    <Step key={`step-${idx}`} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            {features.map((props, idx) => (
                                <Feature key={`feature-${idx}`} index={idx} {...props} />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
