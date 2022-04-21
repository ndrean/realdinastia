import { h } from "preact";
import style from "./style.css";

const Wa = ({ tel }) => {
  return (
    <a href={`https://wa.me/${tel}`} class={style.align}>
      <img
        src="../assets/img/WhatsApp.svg"
        alt="whatsapp icon"
        class={(style.whatsappico, style.align)}
      />
    </a>
  );
};

export default Wa;
