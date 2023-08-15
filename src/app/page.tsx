import Image from "next/image";
import styles from "./page.module.css";
import { Carousel, Typography } from "antd";

export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <div className="navbar-container">
          <div>
            <p className="navbar-title">Anugerah Mandiri</p>
          </div>
          <div className="navbar-menu">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#tentang-kami">Tentang Kami</a>
          </div>
          <div>
            <a href="https://wa.me/6285780200226" target="_blank">
              <button className="navbar-contact-us">Hubungi Kami!</button>
            </a>
          </div>
        </div>

        {/* Header */}
        <div className="header-container shapedividers_com-2341" id="home">
          <div className="header-text-title">
            <p className="header-subtext">Jasa Pasang Kaca Film</p>
            <p className="header-subtext">Gedung Berkualitas &</p>
            <p className="header-subtext">Terpercaya</p>

            <p className="header-subtext-little">
              Jadikan Gedungmu Lebih Eksklusif dengan Kaca Film Berkualitas!
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ marginTop: 20, marginBottom: 40 }} id="portfolio">
          <p className="header-1">Portfolio Jasa Pasang Kaca Film Gedung</p>
          <p className="sub-header-1">
            Sudah ada 100+ klien puas dengan pekerjaan kami
          </p>
        </div>

        <div style={{ marginBottom: 100 }}>
          <div className="row-gallery">
            <Image
              src="/06122013024.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/06122013029.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/18112013015.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
          </div>

          <div className="row-gallery">
            <Image
              src="/20112013016.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/dsfsddsfdsfdsfdsfsfdsfdsf.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/IMG_20220823_181716.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
          </div>

          <div className="row-gallery">
            <Image
              src="/IMG-20190621-WA0006.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/IMG-20190623-WA0001.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/IMG-20190722-WA0009.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
          </div>

          <div className="row-gallery">
            <Image
              src="/IMG-20190722-WA0017.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/IMG-20190722-WA0018.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
            <Image
              src="/IMG-20190724-WA0008.jpg"
              height={400}
              width={400}
              alt="jasa pasang kaca film gedung"
            />
          </div>
        </div>

        <div className="shapedividers_com-7830 center shapedividers_com-2341 divider-middle">
          <p>Hubungi Kami Sekarang!</p>
          <a href="https://wa.me/6285780200226" target="_blank">
            <button style={{ marginTop: 20 }} className="button-contact-us">
              Hubungi Kami
            </button>
          </a>
        </div>

        <div style={{ marginTop: 150, marginBottom: 40 }}>
          <p className="header-1">Klien Kami!</p>
        </div>

        <Carousel autoplay slidesToShow={3} centerMode>
          <div>
            <div className="center">
              <Image
                src="/Pt BBN Airlines.png"
                height={150}
                width={150}
                alt=""
              />
              <br />
              <Typography className="client-title">PT BBN Airlines</Typography>
            </div>
          </div>
          <div>
            <div className="center">
              <Image
                src="/PT Dharmamulia Cahaya Abadi Makmur.png"
                height={150}
                width={150}
                alt=""
              />
              <br />
              <Typography className="client-title">
                PT Dharmamulia Cahaya Abadi Makmur
              </Typography>
            </div>
          </div>
          <div>
            <div className="center">
              <Image src="/virama.png" height={150} width={150} alt="" />
              <br />
              <Typography className="client-title">Pt Virama Karya</Typography>
            </div>
          </div>
        </Carousel>

        <div className="parallaxContainer">
          <div className="parallaxBackground" />
        </div>

        <div style={{ marginTop: 150, marginBottom: 40 }} id="tentang-kami">
          <p className="header-1">Tentang Kami!</p>
        </div>
        <div style={{ marginBottom: 200 }}>
          <Typography className="deskripsi-tentang-kami">
            <b>Anugerah Mandiri</b> adalah perusahaan spesialis dalam solusi
            kaca film terkemuka, fokus pada kebutuhan instalasi kaca film untuk
            bangunan. Kami memiliki keahlian dalam pemasangan kaca film yang
            mulus, meningkatkan estetika dan fungsi bangunan. Kami dengan bangga
            menyediakan produk kaca film 100% asli dari berbagai merek terkenal
            seperti Solar Gard, V-Kool, Sunpolar, Solar Screen, Llumar, Sun
            Protect, dan Masterpiece.
          </Typography>
          <br />
          <Typography className="deskripsi-tentang-kami">
            Kepuasan Anda adalah prioritas utama kami, dan kami memberikan
            jaminan uang kembali jika terbukti produk kami tidak memenuhi
            standar atau merupakan barang palsu. Selama bertahun-tahun, reputasi
            kami sebagai perusahaan terpercaya telah kami jaga dengan
            sungguh-sungguh.
          </Typography>
        </div>

        <div className="btn-hubungi-kami">
          <a href="https://wa.me/6285780200226" target="_blank">
            <Image
              src="/silahkan-hubungi-kami.png"
              height={100}
              width={250}
              alt="hubungi kami"
            />
          </a>
        </div>
      </div>
    </>
  );
}
