import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '@site/src/css/styles.module.css';
import { BlogConfig, DocsConfig } from '@site/src/config/common.config';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | null;
  image: JSX.Element | null;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: BlogConfig.defaultBlog.label,
    Svg: require('@site/static/img/blog-icon-note.svg').default,
    image: null,
    description: (
      <>
        {/* Essay <br /> Travel <br /> Review */}
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/centre-icon-keyboard.svg').default,
    image: null,
    description: (<></>),
  },
  {
    title: DocsConfig.defaultDocs.label,
    Svg: require('@site/static/img/wiki-icon-code.svg').default,
    image: null,
    description: (
      <>
        {/* Development <br /> Wiki <br /> Debugging  */}
      </>
    ),
  },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <>{
            !!Svg ? <Svg className={styles.featureSvg} role="img" /> : image
          }
        </>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
