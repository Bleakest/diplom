import React from "react";
import bgImage from "../../assets/img/photo.jpg";
import Category from "./components/Category";
import maika1 from "../../assets/img/maika1.jpg";
import maika2 from "../../assets/img/maika2.jpg";
import hat1 from "../../assets/img/hat1.jpg";
import hoodie1 from "../../assets/img/hoodie1.jpg";
import longsliv1 from "../../assets/img/longsliv1.jpg";
import SearchPanel from "../../components/SearchPanel";

export function Main() {
  return (
    <div className="pt-[80px]">
      <div className="bg-zinc-700 w-full h-[350px] flex">
        <img src={bgImage} alt="bg-photo" className="w-full" />
      </div>
      <div className="container mx-auto">
        <SearchPanel />
        <Category />
        <div className="flex flex-wrap justify-around max-w-[1240px]">
          <div>
            <img width={250} src={maika1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={maika2} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={hat1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={hoodie1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
          <div>
            <img width={250} src={longsliv1} />
            <h2>Product Name</h2>
            <div>Product cost</div>
          </div>
        </div>
      </div>
    </div>
  );
}
