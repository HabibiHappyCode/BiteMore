
import Premium from './Premium'
import Delivery from './Delivery'
import Works from './Works'
import Serve from './Serve'
import Comments from './Comments'
import Ready from './Ready'

function Services() {
    return (
        <div className='px-[8em] pb-20 max-lg:px-3 bg-[#F5F5F5]'>
          <Premium />
          <Delivery />
          <Works />
          <Serve />
          <Comments />
          <Ready />
        </div>
    )
}

export default Services
