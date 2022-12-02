import c from './Footer.module.css';
import footerData from '../../json/footer.json';
import { v4 as uuidv4 } from 'uuid';
const Footer = () => {
  return (
    <footer>
      <div className={c.footerwrapper}>
        <div className={c.footerItem}>
          <p className={c.footerTxt}>Savolingiz bormi? Qo'ng'iroq qiling</p>
          <p className={c.footerphone}>+998 71 209 99 44</p>
          <div className={c.socialMedia}>
            <div>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M14.992 4.653h2.009V1.155C16.654 1.107 15.463 1 14.075 1c-2.896 0-4.88 1.821-4.88 5.17v3.08H6v3.91h3.195V23h3.918v-9.839h3.067l.486-3.91h-3.554V6.557c.001-1.13.306-1.904 1.88-1.904z' fill='%23fff'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <div>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M9.633 15.083l-.364 5.119c.52 0 .746-.224 1.016-.492l2.441-2.333 5.059 3.704c.927.517 1.581.245 1.831-.853l3.32-15.558.001-.001c.295-1.372-.495-1.908-1.4-1.571L2.022 10.569c-1.332.517-1.311 1.26-.226 1.596l4.99 1.552 11.59-7.252c.545-.36 1.04-.16.633.2l-9.375 8.418z' fill='%23fff'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <div>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath d='M16.929 1H7.07A6.078 6.078 0 001 7.071v9.858A6.078 6.078 0 007.071 23h9.858A6.078 6.078 0 0023 16.929V7.07A6.078 6.078 0 0016.929 1zm4.12 15.929a4.124 4.124 0 01-4.12 4.12H7.07a4.124 4.124 0 01-4.119-4.12V7.07a4.124 4.124 0 014.12-4.119h9.857a4.124 4.124 0 014.12 4.12v9.857z' fill='%23fff'/%3E%3Cpath d='M12 6.332A5.675 5.675 0 006.33 12 5.675 5.675 0 0012 17.67 5.675 5.675 0 0017.669 12a5.675 5.675 0 00-5.67-5.668zm0 9.385A3.721 3.721 0 018.283 12 3.721 3.721 0 0112 8.283 3.721 3.721 0 0115.717 12 3.721 3.721 0 0112 15.717zm5.907-11.041a1.437 1.437 0 00-1.431 1.432c0 .376.153.745.42 1.012.265.266.635.42 1.011.42.377 0 .746-.154 1.012-.42.267-.267.42-.636.42-1.012 0-.378-.153-.747-.42-1.013a1.437 1.437 0 00-1.012-.419z' fill='%23fff'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
            <div>
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.082 4c2.8 0 4.266.385 5.06 1.33.798.947.858 2.4.858 4.507v3.809c0 2.415-.38 3.81-1.274 4.664-.87.833-2.216 1.173-4.644 1.173H6.918C1.915 19.483 1 17.517 1 13.646V9.837c0-1.998 0-3.442.771-4.422C2.563 4.41 4.053 4 6.918 4h10.164zm-6.574 10.68l4.616-2.413a.71.71 0 00-.002-1.258l-4.615-2.397a.71.71 0 00-1.037.63v4.808a.71.71 0 001.038.63z' fill='%23fff'/%3E%3C/svg%3E"
                alt=""
              />
            </div>
          </div>
          <img
            src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.793161d.svg"
            alt=""
          />
          <div className={c.footerLink}>
            <a href="/">Do`konlar manzillari Toshkent</a>
          </div>
        </div>
        <div className={c.footerList}>
          {footerData.map((el) => {
            return (
              <div key={uuidv4()}>
                <h3 className={c.footerTitle}>{el.title}</h3>
                {el.text.map((e) => {
                  return (
                    <p key={uuidv4()} className={c.footerText}>
                      {e}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className={c.footerHr}></div>
      <div className={c.footerinfo}>
        <p>
          2016-2022 © texnomart.uz. Barcha huquqlar himoyalangan. Tovarlarning
          ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal
          qiladi
        </p>
        <div className={c.payment}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
            alt=""
          />
          <img src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/intend.81957d2.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png" alt="" />
          <img src="https://texnomart.uz/_nuxt/img/payme.677630d.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
