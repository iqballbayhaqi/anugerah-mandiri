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
            Gallery
          </button>
          <button>
            Tentang Kami
          </button>
        </div>
        <div>
          <button className='navbar-contact-us'>
            Hubungi Kami!
          </button>
        </div>
      </div>

      {/* Header */}
      <div className='header-container shapedividers_com-2341'>

      </div>

      {/* Body */}
      <div style={{marginTop: 20, marginBottom: 40}}>
        <p className='header-1'>Portfolio Jasa Pasang Kaca Film Gedung</p>
        <p className='sub-header-1'>Sudah ada 100+ klien puas dengan pekerjaan kami</p>
      </div>

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
      
    </div>
  )
}
