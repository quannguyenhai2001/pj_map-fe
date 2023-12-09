const CamLo = () => {
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
            <iframe src="https://www.arcgis.com/apps/MapSeries/index.html?appid=b65a189e30b740b3994f45b6bdbea11f" width="100%" title="CamLo" frameBorder="0" style={iframeStyle}></iframe>
        </div>
    )
}
export default CamLo;