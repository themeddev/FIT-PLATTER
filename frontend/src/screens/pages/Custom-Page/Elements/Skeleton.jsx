const Skeleton = () => {
    return (
        <div className=" flex flex-col gap-4 opacity-30 w-64 lg:w-80">
            <div className="h-48 skeleton w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="flex justify-between">
                <div className="skeleton  h-10 items-start w-20"></div>
                <div className="skeleton rounded-full  h-10 items-end w-10 mr-2"></div>
            </div>
        </div>
    )
}

export default Skeleton