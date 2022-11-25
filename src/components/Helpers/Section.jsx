const Section = () => {
  return (
    <>
      <section className="bg-success p-2 text-dark bg-opacity-25">
        <h1 className="titulo">Beneficiados</h1>
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
            placeholder="Dirección"
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
          <section className="titulo">
            <p>Agregue una fotografia</p>
            <input name="fotografia" type="file" />
          </section>
          <section className="agregar">
            <input type="button" value="agregar beneficiado" onclick />
          </section>
        </form>
      </section>
      <article className="bg-success p-2 text-dark bg-opacity-25">
        <h1 className="titulo">Ayudas</h1>
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
        <section className="agregar">
          <input type="button" value="agregar " onclick />
        </section>
      </article>
      <section className="bg-success p-2 text-dark bg-opacity-25">
        <h1 className="titulo">Presupuesto</h1>
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
        <section className="agregar">
          <input type="button" value="agregar " onclick />
        </section>
      </section>
    </>
  );
};

export default Section;
