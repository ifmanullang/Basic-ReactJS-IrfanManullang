import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>Ini Feature</h1>
      <p>{prop.data}</p>
      <img class="gambar" src="https://th.bing.com/th/id/OIP.sw4s1kt5TRz9G0uU1nlqbAAAAA?w=197&h=182&c=7&r=0&o=5&pid=1.7"align="left"/>
      <img class="gambar" src="https://store.shungite.com/images/companies/1/logo-paypal-visa.gif" align="middle"/>
      <img class="gambar" src="https://logonoid.com/images/thumbs/fedex-express-logo.png"align="right"/>
    </section>
  );
}

export default Content;