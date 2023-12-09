const DC = () => {
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
            <iframe src="#" width="100%" title="CamLo" frameBorder="0" style={iframeStyle}></iframe>
        </div>
    )
}
export default DC;