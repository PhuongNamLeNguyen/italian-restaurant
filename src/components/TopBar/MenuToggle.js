const MenuToggle = ({ onVisibleNavigation }) => {
    return (
        <div onClick={onVisibleNavigation} className="top-bar__menu-toggle">
            <img src="/icon/i-menu.svg" alt=""></img>
        </div>
    );
};

export default MenuToggle;
