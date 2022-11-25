const Footer = () => {
  return (
    <footer>
      <section class="footer-basic">
        <section class="social">
         <img src="../../../facebook.png" alt="Facebook"/>
          <a href="https://www.facebook.com/">Facebook</a>
         <img src="../../../whatsapp.png" alt="WhatsApp"/>
          <a href="https://www.whatsapp.com/?lang=es">WhatsApp</a>
         <img src="../../../instagram.png" alt="Instagram"/>
          <a href="https://www.instagram.com/">Instagram</a>

        </section>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Inicio</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Politicas</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Terminos y condiciones</a>
          </li>
        </ul>
        <p class="copyright">Sugar Mommy/Daddy © 2022</p>
      </section>
    </footer>
  );
};

export default Footer;
