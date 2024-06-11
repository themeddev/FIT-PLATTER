

export const Notification = ({content}) =>{
    return (
        <motion.div 
        className="flex justify-center z-40 fixed top-20 right-0 w-full h-4"
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .2, ease: [.64,.04,.08, .98]}}
        >
        <div className="p-2 w-auto py-5 bg-myOrange items-center text-white leading-none rounded-full flex justify-between" role="alert">
          <span className="font-Poppins mx-2 text-left flex-auto">{content}</span>
        </div>
      </motion.div>
    )
}