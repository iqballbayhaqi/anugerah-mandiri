import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <div className='navbar-container'>
        <div>
          <p className='navbar-title'>Anugerah Mandiri</p>
        </div>
        <div className='navbar-menu'>
          <button>
            Home
          </button>
          <button>
            Portfolio
          </button>
          <button>
            Tentang Kami
          </button>
        </div>
        <div>
          <a href='https://wa.me/6285780200226' target="_blank">
            <button className='navbar-contact-us'>
              Hubungi Kami!
            </button>
          </a>
        </div>
      </div>

      {/* Header */}
      <div className='header-container shapedividers_com-2341'>
        <div className='header-text-title'>
          <p className='header-subtext'>Jasa Pasang Kaca Film</p>
          <p className='header-subtext'>Gedung Berkualitas &</p>
          <p className='header-subtext'>Terpercaya</p>

          <p className='header-subtext-little'>Jadikan Gedungmu Lebih Eksklusif dengan Kaca Film Berkualitas!</p>
        </div>
      </div>

      {/* Body */}
      <div style={{marginTop: 20, marginBottom: 40}}>
        <p className='header-1'>Portfolio Jasa Pasang Kaca Film Gedung</p>
        <p className='sub-header-1'>Sudah ada 100+ klien puas dengan pekerjaan kami</p>
      </div>

      <div style={{marginBottom: 100}}>
        <div className='row-gallery'>
          <Image src='/06122013024.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/06122013029.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/18112013015.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
        </div>

        <div className='row-gallery'>
          <Image src='/20112013016.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/dsfsddsfdsfdsfdsfsfdsfdsf.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/IMG_20220823_181716.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
        </div>

        <div className='row-gallery'>
          <Image src='/IMG-20190621-WA0006.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/IMG-20190623-WA0001.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/IMG-20190722-WA0009.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
        </div>

        <div className='row-gallery'>
          <Image src='/IMG-20190722-WA0017.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/IMG-20190722-WA0018.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
          <Image src='/IMG-20190724-WA0008.jpg' height={400} width={400} alt='jasa pasang kaca film gedung' />
        </div>
      </div>

      <div className='shapedividers_com-7830 center shapedividers_com-2341 divider-middle'>
        <p>Hubungi Kami Sekarang!</p>
        <a href='https://wa.me/6285780200226' target="_blank">
          <button style={{marginTop: 20}} className='button-contact-us'>
            Hubungi Kami
          </button>
        </a>
      </div>
      
    </div>
  )
}
