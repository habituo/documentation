import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🌱 Crea hábitos que perduren',
    Svg: require('@site/static/img/calendar.svg').default,
    description: (
      <>
        Habituo te ofrece una plataforma clara, intuitiva y visual para ayudarte a mantener la constancia y ver tu progreso día a día.
      </>
    ),
  },
  {
    title: '⏱️ Tu progreso, en tus manos',
    Svg: require('@site/static/img/diversity.svg').default,
    description: (
      <>
        Habituo te muestra de forma sencilla cómo avanzas hacia tus metas, ayudándote a mantener la motivación en todo momento.
      </>
    ),
  },
  {
    title: '🎨 Diseña tu experiencia',
    Svg: require('@site/static/img/career.svg').default,
    description: (
      <>
        Personaliza colores, tipografía, bordes y modo oscuro o claro para crear un entorno que te inspire cada vez que entres.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
