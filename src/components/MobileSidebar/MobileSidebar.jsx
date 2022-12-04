import c from './MobileSidebar.module.css';
const MobileSidebar = ({ setIsMobileOpen, IsMobileOpen }) => {
  return (
    <>
      <div
        className={c.IsMobileOpen}
        style={{ left: `${IsMobileOpen ? '0' : '-100%'}` }}
      ></div>
      <div
        style={{ display: `${IsMobileOpen ? 'block' : 'none'}` }}
        onClick={() => setIsMobileOpen(false)}
        className={c.view}
      ></div>
    </>
  );
};

export default MobileSidebar;
