import "./styles.css";

function Sidebar() {
  let data = "Beberapa list pertanyaan yang sering ditanyakan";
  return (
    <div>
      <h1 className="sidebar-wrapper ">Yang sering ditanyakan</h1>
      <h3>{data}</h3>
      <p>* Apakah toko ini sudah terdaftar dan aman ?</p>
      <p>* Diamana alamat toko ini?</p>
      <p>* Seberapa aman belanja online di toko ini ?</p>
      <p>* Adakah uang kembali apabila barang rusak?</p>
      <p>* Bagaimana cara mengganti barang yg rusak?</p>
    </div>
  );
}

export default Sidebar;
