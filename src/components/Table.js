
function Table({thd, tb}) {
    return (
        <table>
          <thead>
            <tr>
                {thd.map(h=>{
                    return <th key={h}>{h} </th>
                })}

            </tr>
        </thead>  
        <tbody>
            {tb.map((row, ind)=>{

                return <tr key={ind}>
                    {thd.map((key, index)=>{
                        return <td key={row[key]}>{row[key]}</td>

                    })}
                    </tr>
                })}
                </tbody>
        </table>
    )    
}
export default Table; 
