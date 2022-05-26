import React from "react";
import TypeIt from "typeit-react";

const TypeItComponent = () => {
  return (
    <div>
      <h4 className="text-muted">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .type("Hi, This is a Pelazio")
              .pause(750)
              .delete(7)
              .pause(500)
              .type("Shopping Store");

            return instance;
          }}
          options={{
            loop: true,
            speed: 200,
          }}
        />
      </h4>
      <div>
        <h3>
        <TypeIt
        options={{
          loop: true,
          speed: 100,
        }}
        >
        welcome to pelazio
        </TypeIt>
        </h3>
      </div>
    </div>
  );
};

export default TypeItComponent;
