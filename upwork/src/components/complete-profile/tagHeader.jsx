
const TagHeader = (props) => {


    return (
        <div className='bg-white px-5 md:py-4'>
            <span className='text-lg font-bold'>{props.tag} <br /> <span className='text-xs py-0'>{props.value} of 9</span></span>
        </div>

    )
}

export default TagHeader;