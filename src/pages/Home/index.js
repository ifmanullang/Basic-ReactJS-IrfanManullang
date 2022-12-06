import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Home() {
  let data = "Toko Online";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;
