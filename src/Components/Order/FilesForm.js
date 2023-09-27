import { useRef, useState } from "react"
// Components
import { FileUploader } from "./FileUploader"
//Assets
import {ReactComponent as BirthCertificate} from '../../Assets/BirthCertificate.svg';
import {ReactComponent as INE} from '../../Assets/INE.svg';
import {ReactComponent as CURP} from '../../Assets/CURP.svg';

export default function FilesForm() {

    const [fileName1, setFileName1] = useState("");
    const handleFile1 = (file) => {
        setFileName1(file.name);
    };
    const [fileName2, setFileName2] = useState("");
    const handleFile2 = (file) => {
        setFileName2(file.name);
    };
    const [fileName3, setFileName3] = useState("");
    const handleFile3 = (file) => {
        setFileName3(file.name);
    };

    return(
        <div>
            <div>
                <div className="uploaders">
                    <div>
                        <FileUploader handleFile={handleFile1} name={<p>Birth Certificate</p>} svg={<BirthCertificate className="svgFile"/>}/>
                        {fileName1 ? <p>Uploaded file: {fileName1}</p> : null}
                    </div>
                    <div>
                        <FileUploader handleFile={handleFile2} name={<p>INE</p>} svg={<INE className="svgFile"/>}/>
                        {fileName2 ? <p>Uploaded file: {fileName2}</p> : null}
                    </div>
                    <div>
                        <FileUploader handleFile={handleFile3} name={<p>CURP</p>} svg={<CURP className="svgFile"/>}/>
                        {fileName3 ? <p>Uploaded file: {fileName3}</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}