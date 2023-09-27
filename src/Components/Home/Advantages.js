// Assets
import {ReactComponent as Kit} from '../../Assets/emergency-kit.svg';
import {ReactComponent as Profile} from '../../Assets/profile.svg';
import {ReactComponent as Configuration} from '../../Assets/configuration.svg';

export default function Advantages(){
    return (
        <div className="advantages_container container-fluid overflow-hidden d-flex align-items-center">
            <div className="row">
                    <div className="adv_col col-md-4">
                        <div className='adv_container m-2 text-center d-flex flex-column align-items-center justify-content-center' id="adv_1">
                            <Kit className='img_adv mb-4'/>
                            <h2 className='mb-5'>Medical information & Emergency Situations</h2>
                            <p>
                                Store critical medical information such as allergies, 
                                medications, and emergency contacts. In emergency situations medical personnel could use it for 
                                quick access to a person's health details.
                            </p>
                        </div>
                    </div>
                <div className="adv_col col-md-4 text-center">
                    <div className='adv_container m-2 text-center d-flex flex-column align-items-center justify-content-center' id="adv_2">
                        <Profile className='img_adv mb-4'/>
                        <h2 className='mb-5'>Medical information & Emergency Situations</h2>
                        <p>
                        In a world where contactless interactions are becoming more important, 
                        a wearable that allows for quick and secure identity verification could 
                        address the need for efficient and touch-free identification.
                        </p>
                    </div>
                </div>
                <div className="adv_col col-md-4 text-center">
                    <div className='adv_container m-2 text-center d-flex flex-column align-items-center justify-content-center' id="adv_3">
                        <Configuration className='img_adv mb-4'/>
                        <h2 className='mb-5'>Medical information & Emergency Situations</h2>
                        <p>
                            Display personalized information, such as loyalty program details, personalized greetings, 
                            or preferences at hospitality and retail establishments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}