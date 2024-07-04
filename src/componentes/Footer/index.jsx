import "./Footer.css"

const Footer = () => {
    return  <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='https://www.facebook.com/share/adLc2bR7PqWmMeoR/?mibextid=qi2Omg'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='https://www.instagram.com/alanglzq?igsh=MWZsbWJmN3B0OXhnZQ=='>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Alan González</strong>
</footer>
}

export default Footer