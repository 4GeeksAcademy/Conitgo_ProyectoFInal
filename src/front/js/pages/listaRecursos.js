import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardRecursos  from "../component/cardRecursos"; 
import { useParams, useNavigate } from "react-router-dom";

export const ListaRecursos = () => {
  const { store, actions } = useContext(Context);
  const { categoria } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    actions.get_recurso_categoria(categoria)
  }, [categoria]);

  const seleccionarCategoria = (nuevaCategoria) => {
    navigate(`/listarecursos/${nuevaCategoria}`);
  };

  return (
  <>
      <div className="container-fluid">
      <div className="row text-center align-items-center justify-content-center m-auto">
				<div className="col-10 jumbotron_4 p-3 mt-4 border rounded-3 mb-3">
					<h5 className="mi_titulo">Estos son los recursos de la categoria <span className="texto_especial">{categoria}</span></h5>
				</div>
			</div>
      <div className= "row d-flex justify-content-center">
        
        <div className="col-10 text-start m-3">
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="fs-3">Categorías</span>
            </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('alimentos')}>Alimentos</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('salud')}>Salud</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('ropa')}>Ropa</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('vivienda')}>Vivienda</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('formacion')}>Formación</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('empleo')}>Empleo</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('legales')}>Legales</li>
                  <li className="dropdown-item" onClick={() => seleccionarCategoria('ocio')}>Ocio</li>
                </ul>
          </div>

          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="fs-4">Buscar por ubicación</span>
            </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
        </div>
      </div>
    
      
      <div className= "row d-flex mx-5">
          {store.recursosCategoria.map((recurso) => ( 
            <div className="col-12 col-md-4 col-lg-3 justify-content-center m-auto" key={recurso.id}>
              <CardRecursos
                key={recurso.id}
                id={recurso.id}
                nombre={recurso.nombre}
                descripcion={recurso.descripcion}
                ong={recurso.ong}
                direccion={recurso.direccion}
              />
            </div> 
        ))}
        
      </div>
        
      <div className= "d-flex justify-content-center">
        <div className="col-10 text-start m-3">
          <button className="btn secundario" style={{ width: '150px' }} onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>
      </div>
    </>
  );
};