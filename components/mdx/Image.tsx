export const img = ({ src, alt }: { src: string, alt: string }) => {
    const root = "/posts/"
    return (
        <>
            <img src={root + src} alt={alt} className='mx-auto mb-0 mt-8 rounded-lg' />
            {alt != '' ? (<span className='block w-full mb-8 mt-4 text-center text-sm'>{alt}</span>) : (<></>)}
        </>
    );
};