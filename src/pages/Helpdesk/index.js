import Content from "./fragments/Helpdesk";
import Sidebar from "./fragments/sidebar/sidebar";
import "./styles.css";

function Helpdesk() {
  let data = "Tanyakan Maasalah anda disisni";

  return (
    <div>
      <section className="content-container">
        <h2><Content data={data} /></h2>
        <Sidebar />
      </section>
    </div>
  );
}

export default Helpdesk;
