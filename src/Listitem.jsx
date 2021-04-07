import React from 'react'

const Listitem = (params) => {
    return(
        <li>
        {params.task} <button 
        class="cool-button del"
        onClick={params.onSelect}
        ><i class="fa fa-trash"></i></button>
    </li>
    )
}
export default Listitem;