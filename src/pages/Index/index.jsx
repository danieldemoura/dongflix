import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Advertising from "../../components/Advertising";
import Footer from "../../components/Footer";

export default function Index() {
    return (
        <>
            <Menu />
            <Header>
                <Headline title={banner.slogan} text={banner.info} />
                <SlideShow slideShow={banner.slideShow}/>
            </Header>
            <main>
                <Advertising/>
            </main>
            <Footer />
        </>
    )
}