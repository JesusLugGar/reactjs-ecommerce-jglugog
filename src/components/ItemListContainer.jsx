
const ItemListContainer = (props) => {
  
    const { tituloItem, categoriaItem } = props;

  return (
    <div className="align-items-center text-center gap-3">
      <h1>{tituloItem}</h1>
      <p>
        Explorando Categoria: <strong>{categoriaItem}</strong>
      </p>
      <button className="btn btn-aventum btn-lg px-4 shadow-sm">
        Ver Producto
      </button>
    </div>
  );
};

export default ItemListContainer;
