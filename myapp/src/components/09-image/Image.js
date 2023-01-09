import React from "react";
import northLights from "../../assets/img/image1.jpg";

const Image = () => {
  return (
    <div>
      {/* Statik yöntemde görüntüler public klasörü içinde aranır */}
      <img src="assets/img/bmw.png" alt="" width={"300"} />

      {/*External url veya CDN */}
      <img
        src="https://images.pexels.com/photos/6128818/pexels-photo-6128818.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={"300"}
      />
      {/* Import ve Require yönteminde dosyalar src içinde olmalıdır */}
      <img src={northLights} alt="" width={"300"} />

      <img src={require("../../assets/img/image2.jpg")} alt="" />
    </div>
  );
};

export default Image;
