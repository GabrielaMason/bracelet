// CSS
import "./OurTechnology.css"
export default function OurTechnology(){
    return (<div>
        <div className="container">
            <div>
                <h1>NFC</h1>
                <p className="text_tech"> Near Field Communication enables secure wireless connectivity between two devices.  
                    <span className="tags"> NFC Tags</span> are tiny chips connected to and antenna. This antenna allows the chip to interact with and NFC reader. </p>
            </div>
            <div>
                <h1>How Do NFC Tags Work?</h1>
                <p className="text_tech "> Two devices - the NFC tag and the NFC reader exchange information in NFC data exchange format. 
                    NFC tags work without a battery and draw power from another device, e.g., a smartphone.</p>
            </div>
            <div>
                <h1>Benefits</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="circle">
                            <p className="text_circle text-center">Instant connection</p>
                        </div>
                        <div className="circle">
                            <p className="text_circle text-center">Wireless exchange</p>
                        </div>
                        <div className="circle">
                            <p className="text_circle text-center">Secure technology</p>
                        </div>
                        <div className="circle">
                            <p className="text_circle text-center">No need for network connectivity</p>
                        </div>
                        <div className="circle">
                            <p className="text_circle text-center">Reduced carbon footprint</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-end mt-5 text_tech">For more information we recommend this web site: https://www.nomtek.com/blog/what-are-nfc-tags</p>
        </div>
        </div>)
}