function downloadResume(){
    const link = document.createElement('a');
    link.href = "/files/Andrade_portfolio.pdf";
    link.download = 'Andrade_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}