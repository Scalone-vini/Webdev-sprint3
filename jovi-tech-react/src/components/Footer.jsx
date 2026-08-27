function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer>
            <p>© {ano} Jovi Tech. Todos os direitos reservados.</p>
        </footer>
    );
}

export default Footer;