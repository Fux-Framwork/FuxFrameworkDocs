import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Easy to Use',
        Svg: require('@site/static/img/undraw_smiley-face.svg').default,
        description: (
            <>
                FuxFramework is designed to be easy to use and get started, especially for beginners. You can take care
                only of your web application logic
            </>
        ),
    },
    {
        title: 'Ready made components',
        Svg: require('@site/static/img/undraw_rocket.svg').default,
        description: (
            <>
                FuxFramework has many built in features that allow you to speed up your development process by just
                using pre-made solutions for boring stuffs
            </>
        ),
    },
    {
        title: 'Powered by pure PHP',
        Svg: require('@site/static/img/undraw_code.svg').default,
        description: (
            <>
                If you want to build PHP application, you may want to learn only PHP. Just forgot blade, templates and
                all other stranger things
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
