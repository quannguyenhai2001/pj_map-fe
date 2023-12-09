const QTG = () => {
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
            <iframe src="https://www.artsteps.com/view/653e9ff35dd120662ebddf31" width="100%" title="CamLo" frameBorder="0" style={iframeStyle}></iframe>
        </div>
    )
}
export default QTG;