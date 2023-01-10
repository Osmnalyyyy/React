import React from "react";

const Events = () => {
  // Event handler
  const sayHello1 = () => {
    alert("Selam Bebek");
  };
  const sayHello2 = (name) => {
    alert(`Hello ${name} `);
  };

  return (
    <div>
      {/* Event handler parametresiz kulanılcaksa  aşağıdaki gibi fonksiyon kullanmadan çağrılabilir */}
      <button onClick={sayHello1}>Say Hello1 </button>
      <br />
      <br />
      <br />
      <br />
      {/* Event handlere parametre gönderilecekse  aşağıdaki gibi fonksiyon kullanmak zorunludur */}
      <button onClick={() => sayHello2("Osman")}>Say Hello2</button>
    </div>
  );
};

export default Events;
