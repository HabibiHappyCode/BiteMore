import { Skeleton } from '@mui/material';

function SkeletonBlock() {
    return (
        <div className="w-[24%] max-lg:w-[32%] max-md:w-[48%] max-sm:w-[47.5%] rounded-xl overflow-hidden">
            <div className="w-[100%] h-[30vh]  max-sm:h-[30vh] ">
                <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '90%' }} sx={{ bgcolor: 'grey.900' }} />
            </div>

            <article className=" py-8 max-sm:py-5 ">
                <Skeleton animation='wave' variant="text" style={{ fontSize: '1em', marginTop: '-40px' }} sx={{ bgcolor: 'grey.900' }} />
                <Skeleton animation='wave' variant="text" style={{ fontSize: '1em' }} sx={{ bgcolor: 'grey.900' }} />
                <Skeleton animation='wave' variant="text" style={{ fontSize: '1em' }} sx={{ bgcolor: 'grey.900' }} />

                <main className=' flex justify-between max-sm:justify-center items-center max-sm:flex-wrap max-sm:gap-2'>
                    <Skeleton animation='wave' variant="text" style={{ fontSize: '2em', width: '65%', }} sx={{ bgcolor: 'grey.900' }} />
                    <Skeleton animation='wave' variant="text" style={{ fontSize: '2em', width: '30%' }} sx={{ bgcolor: 'grey.900' }} />
                </main>
            </article>
        </div>
    )
}

export default SkeletonBlock
