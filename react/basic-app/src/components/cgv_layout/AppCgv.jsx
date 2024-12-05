import './cgv_css/cgv.css';
import './cgv_css/common.css';

import Header from './Header.jsx';
import HeaderTop from './header/HeaderTop.jsx';
import HeaderBottom from './header/HeaderBottom.jsx';
import Content from './Content.jsx';
import Top from './content/Top.jsx';
import MovieChart from './content/MovieChart.jsx';
import Event from './content/Event.jsx';
import Speicail from './content/Special.jsx';

export default function AppCgv() {
    return (
        <>
            <Header>
                <HeaderTop />
                <HeaderBottom />
            </Header>
            <Content>
                <Top />
                <div className='main-content-wrap'>
                    <MovieChart />
                    <Event />
                    <Speicail />
                </div>
            </Content>
        </>
    );
}