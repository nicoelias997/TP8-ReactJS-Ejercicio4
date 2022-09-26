import React from "react";

const Frase = (props) => {
  return (
    <div className="container rounded-3 mb-4 mt-4">
        <section className="d-flex justify-content-center row bg-white">
        <article className="col-md-4 text-center">
        <img
          src={props.imagen}
          alt={props.caracter}
          className="p-1"
        />
        </article>
          <article className="col-md-8 justify-content-start p-2">
        <h5>
          {props.caracter}
        </h5>
        <p>
          {props.frase}
        </p>
        </article>
      </section>
    </div>
  );
};

export default Frase;
