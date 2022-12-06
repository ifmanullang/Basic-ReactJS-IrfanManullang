import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>Selamat  datang di halaman utama</h1>
      <p>{prop.data}</p>
      <img class="gambar" src="https://th.bing.com/th/id/OIP.iZHM5UPSHdShIZr3qVoeUQHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7"/>
    </section>
  );
}

export default Content;