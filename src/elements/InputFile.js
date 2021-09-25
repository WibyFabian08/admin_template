import React, {useRef} from 'react';

import FileUploadIcon from '@mui/icons-material/FileUpload';

const InputFile = () => {
    const inputRef = useRef(null);
    
    return (
        <div className="w-full mb-5">
            <input type="file" className="hidden" ref={inputRef} />
            <button className="w-full px-4 py-2 mt-3 text-white transition-all duration-300 bg-green-500 rounded-lg hover:bg-green-400" onClick={() => inputRef?.current.click()}><FileUploadIcon style={{color: 'white'}}></FileUploadIcon> Upload</button>
        </div>
    )
}

export default InputFile;