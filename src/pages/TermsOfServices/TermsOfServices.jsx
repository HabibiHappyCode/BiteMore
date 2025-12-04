import Acceptance from "./Acceptance"
import ContactInfo from "./ContactInfo"
import DeliveryTerms from "./DeliveryTerms"
import Description from "./Description"
import Disclaimer from "./Disclaimer"
import IinterllectualProp from "./InterllectualProp"
import Law from "./Law"
import Legal from "./Legal"
import ModOfTerms from "./ModOfTerms"
import OrderAndPayment from "./OrderAndPayment"
import PrivacyAndPolicy from "./PrivacyAndPolicy"
import SubOfServices from "./SubOfServices"
import Termination from "./Termination"
import UserConduct from "./UserConduct"
import UserReg from "./UserReg"
import Welcome from "./Welcome"


function TermsOfServices() {
    return (
        <div className='px-[8em] pb-20 max-lg:px-3 bg-[#F5F5F5]'>
            <Legal />
            <Welcome />
            <Acceptance />
            <Description />
            <UserReg />
            <OrderAndPayment />
            <DeliveryTerms />
            <SubOfServices />
            <UserConduct />
            <IinterllectualProp />
            <Disclaimer />
            <PrivacyAndPolicy />
            <ModOfTerms />
            <Termination />
            <Law />
            <ContactInfo />
        </div>
    )
}

export default TermsOfServices
