/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars, react/prop-types
function Output({ data }) {
    // eslint-disable-next-line react/prop-types
    if (!Array.isArray(data) || data.length === 0) {
        return <p>Không có dữ liệu</p>;
    }
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Money</th>
                        <th>Rate</th>
                        <th>End Year</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.year}</td>
                            <td>{row.money}</td>
                            <td>{row.rate}</td>
                            <td>{row.endYear}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
}

export default Output;