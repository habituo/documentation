import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const PageList = [
  {
    title: 'Primeros pasos',
    description: (
      <>
        Aprende a crear tu cuenta, configurar tu perfil y conocer las funciones básicas para comenzar a construir tus hábitos de manera sencilla y efectiva.
      </>
    ),
    link: 'https://docs.habituo.es/docs/category/primeros-pasos',
  },
  {
    title: 'Áreas',
    Svg: require('@site/static/img/diversity.svg').default,
    description: (
      <>
        Las áreas te permiten dividir tu vida en secciones como “Salud”, “Trabajo” o “Bienestar”, ayudándote a mantener el equilibrio entre tus diferentes objetivos.
      </>
    ),
    link: 'https://docs.habituo.es/docs/category/áreas',
  },
  {
    title: 'Hábitos',
    description: (
      <>
        Define tus metas, elige la frecuencia, mide tu progreso y observa cómo pequeñas acciones se convierten en grandes resultados a lo largo del tiempo.
      </>
    ),
    link: 'https://docs.habituo.es/docs/category/hábitos',
  },
  {
    title: 'Recordatorios',
    description: (
      <>
        Configura recordatorios personalizados para cada hábito y recibe notificaciones en el momento justo, manteniendo la constancia sin esfuerzo.
      </>
    ),
    link: 'https://docs.habituo.es/docs/category/recordatorios',
  },
];

function Page({ title, description, link }) {
  return (
    <div href={link} className={clsx('col col--6 padding-vert--md')}>
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <button className="button button--secondary button--block">Ir al contenido</button>
        </div>
      </div>
    </div>
  );
}

export default function HomepagePages() {
  return (
    <section className={styles.pages}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">Bienvenido a la documentación de Habituo</Heading>
          <p>Aquí encontrarás toda la información que necesitas para sacar el máximo provecho de **Habituo**, tu plataforma para crear, seguir y mantener hábitos positivos de forma sencilla y personalizada.</p>
        </div>
        <div className="row">
          {PageList.map((props, idx) => (
            <Page key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
