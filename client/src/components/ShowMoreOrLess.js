const ShowMoreOrLess = ({ 
    toggleShowMore, 
    showMore, 
    style, 
    category = 'content',
    color = 'black'
}) => {
    return (
        <span 
            onClick={toggleShowMore}
            style={{
                ...style, 
                cursor: 'pointer', 
                textTransform: 'uppercase', 
                color
            }}
        >
            {showMore 
                ? <span>
                    {`show less ${category}` }
                    <span className="icon-shape" style={{ marginLeft: '10px'}}>
                        <i className="icon-up"></i>
                    </span> 
                </span> 
                : <span>
                    {`show more ${category}` }
                    <span className="icon-shape" style={{ marginLeft: '10px'}}>
                        <i className="icon-down"></i>
                    </span> 
                </span>
            }
        </span>
    );
};

export default ShowMoreOrLess;