import "./styles.css";

function Helpdesk() {
  let data = "Tanyakan Masalah anda disisni";
  return (
    <section>
      <h1 className="content-wrapper">Info dan Bantuan</h1>
      <p>{data}</p>
      <img class="gambar" src="https://www.bing.com/th?id=OIP.nfDrosEZTxM0YBBvZ5Gj6gHaGI&w=181&h=149&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"/>
    </section>
  );
}

export default Helpdesk;
