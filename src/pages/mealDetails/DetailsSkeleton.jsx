import { Skeleton } from '@mui/material';

function DetailsSkeleton() {
    return (
        <div
            className='flex justify-between max-md:flex-wrap max-md:gap-10 '>
            <div className='w-[45%] max-md:w-[100%] h-[70vh]  overflow-hidden rounded-[1.5em] max-md:rounded-xl  shadow-[0_4px_20px_rgba(0,0,0,0.2)]' >
                <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className='w-[52%] max-md:w-[100%] shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-[1.5em] py-10  max-md:py-5 px-8  max-md:px-3 flex flex-col gap-4'>
                <main className='flex items-center gap-4 text-[#0C4521] h-6  max-md:justify-between'>
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '20%', height: '100%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '20%', height: '100%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '20%', height: '100%', borderRadius: 50 }} />
                </main>

                <main className='flex h-100 flex-col gap-5'>
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '100%', height: '2%', borderRadius: 50 }} />
                </main>

                <section className='flex items-center justify-between h-8  gap-3 my-2 '>
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '30%', height: '100%', borderRadius: 10 }} />
                    <Skeleton animation='wave' variant="rectangular" style={{ width: '30%', height: '100%', borderRadius: 10 }} />
                </section>
            </div>
        </div>
    )
}

export default DetailsSkeleton
