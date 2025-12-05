import React from 'react'
import PrivacyHeader from './PrivacyHeader'
import ShortPolicy from './ShortPolicy'
import Introduction from './Introduction'
import CollectInfo from './CollectInfo'
import UseInfo from './UseInfo'
import InfoSharing from './InfoSharing'
import Cookies from './Cookies'
import DataSecurity from './DataSecurity'
import DataRetension from './DataRetension'
import UserRight from './UserRight'
import ChildrenPrivacy from './ChildrenPrivacy'
import DataTransfers from './DataTransfers'
import ThirdParty from './ThirdParty'
import ChangePrivacy from './ChangePrivacy'
import ContactInfo from '../TermsOfServices/ContactInfo'

function PrivacyAndPolicy() {
    return (
        <div className='px-[8em] pb-20 max-lg:px-3 bg-[#F5F5F5]'>
            <PrivacyHeader />
            <ShortPolicy />
            <Introduction />
            <CollectInfo />
            <UseInfo />
            <InfoSharing />
            <Cookies />
            <DataSecurity />
            <DataRetension />
            <UserRight />
            <ChildrenPrivacy />
            <ThirdParty />
            <DataTransfers />
            <ChangePrivacy />
            <ContactInfo value={13} />
        </div>
    )
}

export default PrivacyAndPolicy
