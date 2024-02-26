import Section1 from './_components/Section1';
import Section2 from './_components/Section2';
import Section3 from './_components/Section3';
import Section4 from './_components/Section4';
import Section7 from './_components/Section7';
import Footer from './_components/Footer';
import * as styles from './page.css';

function IntroPage() {
  return (
    <div className={styles.wrapper}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
      <Footer />
    </div>
  );
}

export default IntroPage;
