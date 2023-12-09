const HaNoi = () => {
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
            <iframe src="https://www.arcgis.com/apps/MapTour/index.html?appid=73d45c4edbba4d949b32564d5651b454" width="100%" title="HaNoi" frameBorder="0" style={iframeStyle}></iframe>
        </div>
    )
}
export default HaNoi;