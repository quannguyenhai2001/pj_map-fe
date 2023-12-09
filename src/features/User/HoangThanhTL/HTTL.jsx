const HTTL = () => {
    const iframeStyle = {
        width: '100%',
        height: '100vh', 
        border: 'none',
        overflow: 'hidden' 
    };

    const wrapperStyle = {
        height: '100vh', 
        position: 'relative'
    };
    return (
        <div style={wrapperStyle}>
            <iframe src="https://www.artsteps.com/view/654e08b66f470432ab31d4ba" width="100%" title="CamLo" frameBorder="0" style={iframeStyle}></iframe>
        </div>
    )
}
export default HTTL;