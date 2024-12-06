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
import Package from './content/Package.jsx';
import Notice from './content/Notice.jsx';
import Footer from './footer/Footer.jsx';
import FooterTop from './footer/FooterTop.jsx';
import FooterContent from './footer/FooterContent.jsx';
import GotoButton from './content/GotoButton.jsx';

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
                    <Package />
                    <Notice />
                    <GotoButton /> 
                </div>
            </Content>
            <Footer>
                <FooterTop scr="http://adimg.cgv.co.kr/images/202410/SSG/980x240.png" />
                <FooterContent />
            </Footer>
        </>
    );
}