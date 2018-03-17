/**
 * Created by hao.cheng on 2017/5/6.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class newsByALiYun extends React.Component {
    state = {
        gallery: null
    };
    componentDidMount() {
    }
    componentWillUnmount = () => {
        this.closeGallery();
    };
    openGallery = (item) => {
        const items = [
            {
                src: item,
                w: 0,
                h: 0,
            }
        ];
        const pswpElement = this.pswpElement;
        const options = {index: 0};
        this.gallery = new PhotoSwipe( pswpElement, PhotoswipeUIDefault, items, options);
        this.gallery.listen('gettingData', (index, item) => {
            const _this = this;
            if (item.w < 1 || item.h < 1) { // unknown size
                var img = new Image();
                img.onload = function() { // will get size after load
                    item.w = this.width; // set image width
                    item.h = this.height; // set image height
                    _this.gallery.invalidateCurrItems(); // reinit Items
                    _this.gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });
        this.gallery.init();
    };
    closeGallery = () => {
        if (!this.gallery) return;
        this.gallery.close();
    };
    render() {
        const imgs = [
        ['http://23.106.155.65:8001/-1bf37bfb1b90edd1.jpg', 'http://23.106.155.65:8001/-1d7bba54e61909e7.jpg', 'http://23.106.155.65:8001/-2839469e328d9a9a.jpg', 'http://23.106.155.65:8001/-29ced9ef211be7a6.jpg', 'http://23.106.155.65:8001/-2e646a96e4014b0d.jpg', 'http://23.106.155.65:8001/-3399d46570569cad.jpg', 'http://23.106.155.65:8001/-38cbc0cc56b2b737.jpg', 'http://23.106.155.65:8001/-4071fa004797e20e.jpg', 'http://23.106.155.65:8001/-613957af89f3cd6b.jpg', 'http://23.106.155.65:8001/-6b82921e325c1753.jpg', 'http://23.106.155.65:8001/-7391b311a293f982.jpg', 'http://23.106.155.65:8001/-7511fefa8ed3c9a6.jpg', 'http://23.106.155.65:8001/1.jpg', 'http://23.106.155.65:8001/1538197650-19efc375903fce42(1).jpg', 'http://23.106.155.65:8001/1538197650-19efc375903fce42.jpg', 'http://23.106.155.65:8001/1538197650-3b605a264ac98244(1).jpg', 'http://23.106.155.65:8001/1538197650-3b605a264ac98244.jpg', 'http://23.106.155.65:8001/1538197650475fcaecd7928ac3(1).jpg'], ['http://23.106.155.65:8001/1538197650475fcaecd7928ac3.jpg', 'http://23.106.155.65:8001/153819765047740641ded22e48.jpg', 'http://23.106.155.65:8001/1538197650719f93a2a62e6f64.jpg', 'http://23.106.155.65:8001/2014_08_30_12_48_59.gif', 'http://23.106.155.65:8001/2412f7fe9a70d583.jpg', 'http://23.106.155.65:8001/296d16267b910840.jpg', 'http://23.106.155.65:8001/29da282503d2cf91.jpg', 'http://23.106.155.65:8001/2b1ac8512fdbdf15.jpg', 'http://23.106.155.65:8001/3921333d437260b8.jpg', 'http://23.106.155.65:8001/537586619aa7dc0.jpg', 'http://23.106.155.65:8001/58b9318a53c953d5.jpg', 'http://23.106.155.65:8001/iamgesIMG_0746.JPG', 'http://23.106.155.65:8001/iamgesIMG_0747.JPG', 'http://23.106.155.65:8001/iamgesIMG_0748.JPG', 'http://23.106.155.65:8001/iamgesIMG_0758.JPG', 'http://23.106.155.65:8001/iamgesIMG_0759.PNG', 'http://23.106.155.65:8001/iamgesIMG_0760.JPG', 'http://23.106.155.65:8001/iamgesIMG_0761.JPG', 'http://23.106.155.65:8001/iamgesIMG_0762.JPG'], ['http://23.106.155.65:8001/iamgesIMG_0763.JPG', 'http://23.106.155.65:8001/iamgesIMG_0764.JPG', 'http://23.106.155.65:8001/iamgesIMG_0765.JPG', 'http://23.106.155.65:8001/iamgesIMG_0770.JPG', 'http://23.106.155.65:8001/iamgesIMG_0771.JPG', 'http://23.106.155.65:8001/iamgesIMG_0772.JPG', 'http://23.106.155.65:8001/IMG_0789.JPG', 'http://23.106.155.65:8001/IMG_0790.JPG', 'http://23.106.155.65:8001/IMG_0791.JPG', 'http://23.106.155.65:8001/IMG_0792.JPG', 'http://23.106.155.65:8001/IMG_0797.JPG', 'http://23.106.155.65:8001/IMG_0798.JPG', 'http://23.106.155.65:8001/IMG_0800.JPG', 'http://23.106.155.65:8001/IMG_0809.JPG', 'http://23.106.155.65:8001/IMG_0810.JPG', 'http://23.106.155.65:8001/IMG_0811.JPG', 'http://23.106.155.65:8001/IMG_0812.JPG', 'http://23.106.155.65:8001/IMG_0814.JPG', 'http://23.106.155.65:8001/IMG_0815.JPG'], ['http://23.106.155.65:8001/IMG_0816.JPG', 'http://23.106.155.65:8001/IMG_0819.JPG', 'http://23.106.155.65:8001/IMG_0820.JPG', 'http://23.106.155.65:8001/IMG_0821.JPG', 'http://23.106.155.65:8001/IMG_0822.JPG', 'http://23.106.155.65:8001/IMG_0823.JPG', 'http://23.106.155.65:8001/IMG_0825.JPG', 'http://23.106.155.65:8001/IMG_0826.JPG', 'http://23.106.155.65:8001/IMG_0827.JPG', 'http://23.106.155.65:8001/IMG_0832.JPG', 'http://23.106.155.65:8001/IMG_0835.JPG', 'http://23.106.155.65:8001/IMG_0836.JPG', 'http://23.106.155.65:8001/IMG_0837.JPG', 'http://23.106.155.65:8001/IMG_0839.JPG', 'http://23.106.155.65:8001/IMG_0840.JPG', 'http://23.106.155.65:8001/IMG_0841.JPG', 'http://23.106.155.65:8001/IMG_0842.JPG', 'http://23.106.155.65:8001/IMG_0843.JPG', 'http://23.106.155.65:8001/IMG_0844.JPG'], ['http://23.106.155.65:8001/IMG_0845.JPG', 'http://23.106.155.65:8001/IMG_0846.GIF', 'http://23.106.155.65:8001/IMG_0847.JPG', 'http://23.106.155.65:8001/IMG_0848.JPG', 'http://23.106.155.65:8001/IMG_0849.GIF', 'http://23.106.155.65:8001/IMG_0850.GIF', 'http://23.106.155.65:8001/IMG_0851.JPG', 'http://23.106.155.65:8001/IMG_0852.JPG', 'http://23.106.155.65:8001/IMG_0853.JPG', 'http://23.106.155.65:8001/IMG_0854.JPG', 'http://23.106.155.65:8001/IMG_0855.JPG', 'http://23.106.155.65:8001/IMG_0856.JPG', 'http://23.106.155.65:8001/IMG_0857.JPG', 'http://23.106.155.65:8001/IMG_0887.JPG', 'http://23.106.155.65:8001/IMG_0888.JPG', 'http://23.106.155.65:8001/IMG_0889.JPG', 'http://23.106.155.65:8001/IMG_0915.JPG', 'http://23.106.155.65:8001/IMG_0916.JPG', 'http://23.106.155.65:8001/IMG_20140819_105501.jpg']
        ];

        const imgsTag = imgs.map(v1 => (
            v1.map(v2 => (
                <div className="gutter-box">
                    <Card bordered={false} bodyStyle={{ padding: 0 }}>
                        <div>
                            <img onClick={() => this.openGallery(v2)} alt="example" width="100%" src={v2} />
                        </div>
                        <div className="pa-m">
                            <h3>你在我心中是最美</h3>
                            <small><a href="http://love.songyuanyuan.com" target="_blank" rel="noopener noreferrer">每个微笑都让人沉醉</a></small>
                        </div>
                    </Card>
                </div>
            ))
        ));
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="你在心中是最美" />
                <Row gutter={10}>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[0]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[1]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[2]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgsTag[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgsTag[4]}
                    </Col>
                </Row>
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {this.pswpElement = div;} }>

                    <div className="pswp__bg" />

                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                            <div className="pswp__item" />
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                <div className="pswp__counter" />

                                <button className="pswp__button pswp__button--close" title="Close (Esc)" />

                                <button className="pswp__button pswp__button--share" title="Share" />

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />

                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip" />
                            </div>

                            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />

                            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />

                            <div className="pswp__caption">
                                <div className="pswp__caption__center" />
                            </div>

                        </div>

                    </div>

                </div>
                <style>{`
                    .ant-card-body img {
                        cursor: pointer;
                    }
                `}</style>
            </div>
        )
    }
}

export default newsByALiYun;