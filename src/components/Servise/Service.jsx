import c from './Service.module.css';
import noteIcon from '../../assets/images/note.svg';
import kuryerIcon from '../../assets/images/kuryer.svg';
import securityIcon from '../../assets/images/security.svg';
import cashbackIcon from '../../assets/images/cashback.svg';
import helpIcon from '../../assets/images/help.svg';

const Service = () => {
  return (
    <div className={c.service}>
      <h2>Telefonlar va maishiy texnika muddatli to'lovga</h2>
      <div className={c.serviceWrapper}>
        <div className={c.serviseList}>
          <div className={c.imgWrapper}>
            <img src={noteIcon} alt="" />
          </div>
          <div className={c.serviceTextWrap}>
            <p className={c.serviceTitle}>Muddatli to'lovga sotib olish</p>
            <p className={c.servicetext}>
              Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
            </p>
          </div>
        </div>
        <div className={`${c.hr} ${c.mediaScreenHidden}`}></div>
        <div className={`${c.serviseList} ${c.mediaScreenHidden}`}>
          <div className={c.imgWrapper}>
            <img src={kuryerIcon} alt="" />
          </div>
          <div className={c.serviceTextWrap}>
            <p className={c.serviceTitle}>Bepul yetkazib berish </p>
            <p className={c.servicetext}>
              Texnomartga tovarlarni yetkazib berish shartlari
            </p>
          </div>
        </div>
        <div className={`${c.hr} ${c.mediaScreenHidden}`}></div>
        <div className={`${c.serviseList} ${c.mediaScreenHidden}`}>
          <div className={c.imgWrapper}>
            <img src={securityIcon} alt="" />
          </div>
          <div className={c.serviceTextWrap}>
            <p className={c.serviceTitle}>Mahsulotlar uchun kafolat</p>
            <p className={c.servicetext}>
              Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma
              narsani bilib oling
            </p>
          </div>
        </div>
        <div className={`${c.hr} ${c.mediaScreenHidden}`}></div>
        <div className={`${c.serviseList} ${c.mediaScreenHidden}`}>
          <div className={c.imgWrapper}>
            <img src={cashbackIcon} alt="" />
          </div>
          <div className={c.serviceTextWrap}>
            <p className={c.serviceTitle}>Bonus tizimi</p>
            <p className={c.servicetext}>Bonus tizimi</p>
          </div>
        </div>
        <div className={`${c.hr} ${c.mediaScreenHidden}`}></div>
        <div className={`${c.serviseList} ${c.mediaScreenHidden}`}>
          <div className={c.imgWrapper}>
            <img src={helpIcon} alt="" />
          </div>
          <div className={c.serviceTextWrap}>
            <p className={c.serviceTitle}>Yordam </p>
            <p className={c.servicetext}>Ko'p beriladigan savollar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
