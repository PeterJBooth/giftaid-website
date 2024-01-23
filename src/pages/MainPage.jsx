import { Header } from "../components/Header";

import { CalculatorForm } from "../components/CalculatorForm";
import { PageTitle } from "../components/PageTitle";
import vector1 from "../assets/bg-vector1.svg";
import vector2 from "../assets/bg-vector2.svg";

const MainPage = () => {
  return (
    <main>
      {/* <div className="layout-grid">
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
        <div className="layout-column"></div>
      </div> */}
      <img src={vector1} alt="" className="vector1" />
      <Header />
      <div className="calculator-and-result-container">
        <CalculatorForm />
        <PageTitle />
      </div>
      <img src={vector2} alt="" className="vector2" />
    </main>
  );
};

export { MainPage };
