const Skeleton = () => {
    return (
        <div className=" flex flex-col justify-center  gap-4 w-80 ">
            <div className="h-48 skeleton w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton  h-10 items-end w-28"></div>
        </div>
    )
}

export default Skeleton