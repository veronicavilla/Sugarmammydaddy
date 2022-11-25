import Header from "../Helpers/Header";
import Footer from "../Helpers/Footer";

const Main = () => {
  return (
    <main>
      <Header />
      <aside className="bg-success p-2 text-dark bg-opacity-25">
        <h1>Beneficiados</h1>
        <form action="">
          <input
            class="form_item"
            name="nombre"
            type="text"
            placeholder="Nombre"
          />
          <input
            class="form_item"
            name="direccion"
            type="text"
            placeholder="Direccion"
          />
          <input
            class="form_item"
            name="universidad"
            type="text"
            placeholder="Universidad"
          />
          <input class="form_item" name="edad" placeholder="Edad" type="text" />
          <input
            class="form_item"
            name="correoElectronico"
            placeholder="Correo electronico"
            type="text"
          />
          <section>
            <p>Agregue una fotografia</p>
            <input className="fotografia" name="fotografia" type="file" />
          </section>
          <section>
            <input
              className="agregar"
              type="button"
              value="agregar beneficiado"
              onclick
            />
          </section>
        </form>
      </aside>

      <article className="bg-success p-2 text-dark bg-opacity-25">
        <h1>Ayudas</h1>
        <input
          class="form_item"
          name="nombreProducto"
          type="text"
          placeholder="Nombre producto"
        />
        <input
          class="form_item"
          name="descripcion"
          type="text"
          placeholder="Descripción"
        />
        <input
          class="form_item"
          name="tienda"
          type="text"
          placeholder="Tienda donde se compró"
        />
        <input
          class="form_item"
          name="cantidad"
          placeholder="Cantidad"
          type="text"
        />
        <input class="form_item" name="valor" placeholder="Valor" type="text" />
        <section>
          <input className="agregar" type="button" value="agregar " onclick />
        </section>
      </article>

      <section className="bg-success p-2 text-dark bg-opacity-25">
        <h1>Presupuesto</h1>
        <input
          class="form_item"
          name="valorIngresar"
          placeholder="Ingresar valor"
          type="text"
        />
        <input
          class="form_item"
          name="detalleAyuda"
          placeholder="Detalle sobre ayuda"
          type="text"
        />
        <section>
          <input className="agregar" type="button" value="agregar " onclick />
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Main;
