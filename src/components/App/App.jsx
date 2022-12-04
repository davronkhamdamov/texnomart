import c from './App.module.css';
import appbanner from '../../assets/images/phone-min.d3c6b0c.png';
import appquar from '../../assets/images/quar-code.e14205a.png';
import playStore from '../../assets/images/play-market-uz.20f41ac.png';
const App = () => {
  return (
    <div className={c.app}>
      <img src={appbanner} className={c.appbanner} alt="" />
      <div className={c.appDes}>
        <h1>Ilovani yuklang</h1>
        <p className={c.appDesText}>
          Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
        </p>
        <div className={c.infoQuar}>
          <img src={appquar} alt="" />
          <p>Kamerani yo`naltiring va Texnomart ilovasini bepul yuklang</p>
        </div>
        <img src={playStore} alt="" />
      </div>
    </div>
  );
};

export default App;
