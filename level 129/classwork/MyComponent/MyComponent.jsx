function MyComponent () {
    const containerStyle = {
        padding: "20px",
        backgroundColor: "#ddd"
    };

    const textStyle = {
        color: "blue",
        fontsize: "18px"
    };

    return (
        <div style={containerStyle}>
            <p style={titleStyle}>Hello</p>
        </div>
    );
}

export default MyComponent;