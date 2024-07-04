
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Tooltip = ({tip, settings, keyword}) => {

    const renderList = (data) => {
        if (typeof data === 'object' && data !== null) {
          return (
            <ul style={{padding:0, margin:0}}>
              {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {renderList(value)}
                </li>
              ))}
            </ul>
          );
        } else {
          if (keyword && data.indexOf && data.indexOf(keyword) != -1) {

            const c = data.replace(keyword, `<font color="red">${keyword}</font>`)

            return <div dangerouslySetInnerHTML={{__html: c}}></div>;

          }
          return <div>{data}</div>;
        }
      };

    return (<div style={{ pointerEvents: 'none', width: "25vw", padding: "5px", margin: 0, listStyleType: "none", backgroundColor: "grey", borderRadius: "5px", wordWrap: "break-word" }}>
    <><span><strong>id: </strong></span></>
    {renderList(tip.id)}
    {settings[0].showDocuments && <><br></br><span><strong>document:</strong></span></>}
    {settings[0].showDocuments && (renderList(tip.document.substr(0, 50)))}
    {settings[0].showMetadata && <><br></br><span><strong>metadata:</strong></span></>}
    {settings[0].showMetadata && <div style={{marginLeft: "1em"}}>{(renderList(tip.metadata))}</div>}
  </div>)
}

export default Tooltip
