import HeaderBottomMenuList from './HeaderBottomMenuList.jsx';
import HeaderBottomSearch from './HeaderBottomSearch.jsx';

export default function HeaderBottom() {
    return (
        <div className="header-bottom">
            <div class="header-bottom-nav">
                <HeaderBottomMenuList />
                <HeaderBottomSearch />
            </div>
        </div>
    );
}